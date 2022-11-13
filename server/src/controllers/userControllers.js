const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const userController = {
    register: async function (req, res) {

        const selectedUser = await User.findOne({ email: req.body.email })

        if (selectedUser) return res.status(400).send("Email aread exist!")

        const user = await new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password),
            admin: req.body.admin,

        })

        try {

            await User.create(user)
            console.log(user)
            res.status(201).json({ message: 'User Criado com Sucesso' })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }


    },

    login: async function (req, res) {

        const selectedUser = await User.findOne({ email: req.body.email })

        if (!selectedUser) return res.status(400).send("Email or password  incorrect!")

        const passwordAndUserMatch = bcrypt.compareSync(req.body.password, selectedUser.password)

        if (!passwordAndUserMatch) return res.status(400).send("Email or password  incorrect!")

        const token = jwt.sign({ _id: selectedUser._id, admin: selectedUser.admin }, process.env.TOKEN_SECRET)


        res.header("authorization-token", token)
        res.send("User Logged");

    },


}

module.exports = userController

