const express = require("express")
//const bodyParse = require("body-parse")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

const PORT = process.env.PORT || 3500
const app = express()
app.use(express.json())
dotenv.config()


// app.use(bodyParse.json())
// app.use(bodyParse.urlencoded({ extended: false }))
const mongodbConnString = 'mongodb+srv://2122200433:1234@cluster0.vmw3xaw.mongodb.net/apii?retryWrites=true&w=majority' 
mongoose.connect(mongodbConnString, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
    .then(db => console.log('DB Connected: ', db.connection.db.databaseName))
    .catch(err => console.log("Error al conectarse: ", err.message))


app.use(require("./ruta/componentes/componente"))


app.listen(PORT, function () {
    console.log(`aplicacion de servidor escuchando el puerto ${PORT}`)
})