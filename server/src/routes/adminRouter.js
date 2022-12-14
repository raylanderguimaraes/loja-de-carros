const router = require('express').Router();
const multer = require('multer');
const fs = require('fs');

const Cars = require('../models/Car');

const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    },
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },


})

const upload = multer({ storage: storage })




const auth = require('../controllers/authController');
const { mongo } = require('mongoose');

router.get('/', auth, (req, res) => {
    if (req.user.admin) {
        res.send("Essa página só deve ser visto pelo Admin!")
    } else {
        res.status(401).send("Access Denied!")
    }

})

router.get('/uploads')

//rota para adicionar carro na loja/db

router.post('/post', auth, upload.single('file'), async (req, res) => {
    console.log(req.file)
    // const file = fs.readFileSync(req.file.path)
    // const base64File = Buffer.from(file).toString("base64");



    if (req.user.admin) {
        const { name, slug, brand, model, price } = await req.body


        // const file = fs.readFileSync(`${req.file.path}`)
        // const base64File = Buffer.from(file).toString("base64")
       
        const car = {
            name,
            brand,
            model,
            slug,
            price,
            image: req.file.path.replace("\\", "/")

        }

        if (!name) {
            res.status(422).json({ error: 'O nome do carro é obrigatório' })
            return
        }

        try {

            await Cars.create(car)

            res.status(201).json({ message: 'Carro Adicionado com Sucesso' })
        } catch (error) {
            res.status(500).json({ error: error })
        }
    } else {
        res.status(401).send("Access Denied!")
    }

})


//rota para editar carro da loja

router.patch('/:id', auth, upload.single('file'), async (req, res) => {

    if (req.user.admin) {
        const id = req.params.id
        const { name, slug, brand, model, price } = await req.body

        const car = {
            name,
            brand,
            model,
            slug,
            price,
            image: req.file.path

        }

        try {
            const updatedCar = await Cars.updateOne({ _id: id }, car)

            if (updatedCar.matchedCount === 0) {
                res.status(422).json({ message: 'O carro não existe em estoque!' })
            }
            res.status(200).json(car)

        } catch (error) {
            res.status(500).json({ error: error })
        }
    } else {
        res.status(401).send("Access Denied!")
    }


})


// rota para deletar Carro

router.delete('/:id', auth, async (req, res) => {

    if (req.user.admin) {
        const id = req.params.id

        const car = await Cars.findOne({ _id: id })

        if (!car) {
            res.status(422).json({ message: 'O carro não existe em estoque!' })
            console.log(car)
            return
        }

        try {
            await Cars.deleteOne({ _id: id })
            res.status(200).json({ message: 'Carro removido do estoque' })
        } catch (error) {
            res.status(500).json({ error: error })
        }

    } else {
        res.status(401).send("Access Denied!")
    }

})

module.exports = router;