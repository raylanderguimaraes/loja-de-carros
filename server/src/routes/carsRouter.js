const router = require('express').Router()
const Cars = require('../models/Car');


//rota para listar todos os carros
router.get('/', async (req, res) => {


    try {
        const cars = await Cars.find()

        res.status(201).json(cars)

    } catch (error) {
        console.log(error)
        res.status(500).send({ error: error })
    }



})

//rota para mostrar carro específico
router.get('/:id', async (req, res) => {
    const id = req.params.id


    try {
        const car = await Cars.findOne({ _id: id })

        if (!car) {

            res.status(422).json({ message: 'O carro não existe em estoque!' })
            console.log(car)
            return
        }
        res.status(200).json(car)
    } catch (error) {
        res.status(500).json({ error: error })
    }
})



module.exports = router

