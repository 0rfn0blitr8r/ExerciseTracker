const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/exercise-tracker');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const User = require('./models/user')
const userRoutes = require('./routes/user')
const exerciseRoutes = require('./routes/exercise')


app.use('/users', userRoutes)
app.use('/exercises', exerciseRoutes)


app.listen(port, () => {
    console.log(`Connection established at port ${port}`)
})

// const uri = process.env.ATLAS_URI
// mongoose.connect("mongodb+srv://aaradhyaverma11:AaradhyaVerma11_MongoDBAtlas@cluster0.0qkm8k6.mongodb.net/")

// const connection = mongoose.connection

// connection.once('okay', () => {
//     console.log("MongoDB connection established")
// })