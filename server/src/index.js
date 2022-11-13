
const express = require('express');
const mongoose = require('mongoose');
const PORT = 3333;
const app = express();
const userRouter = require('./routes/userRouter');
const adminRouter = require('./routes/adminRouter');
const carsRouter = require('./routes/carsRouter');
require('dotenv').config();

app.use(
    express.urlencoded({
        extend: true,
    })
)

app.use(express.json())


app.use('/admin', adminRouter)

app.use('/user', userRouter);

app.use('/', carsRouter);
app.use('/uploads', express.static('uploads'))

// app.get('/', (req, res) => {
//     res.send("Hello World")
// })

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)
const db = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicarstore.nanvtt0.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(db)
    .then(() => {
        console.log("MongoDB Connected")
        app.listen(PORT, () => {
            console.log("Server On", PORT)
        });
    })
    .catch((err) => {
        console.log(err.message)
    })





