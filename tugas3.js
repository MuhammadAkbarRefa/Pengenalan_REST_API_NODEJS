const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express()

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

// menjalankan server pada port 8000
app.listen(8000, () =>{
    console.log("Server run on port 8000");
})

// end-point "/Biner" dengan method POST
app.post("/convert/biner", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let biner = Number(req.body.biner) 

    let desimal = parseInt(biner, 2).toString(10)
    let oktal = parseInt(biner, 2).toString(8)
    let hexadesimal = parseInt(biner, 2).toString(16)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        Biner: biner,
        Desimal: desimal,
        Oktal: oktal,
        HexaDesimal: hexadesimal
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/oktal" dengan method POST
app.post("/convert/oktal", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let oktal = Number(req.body.oktal) 

    let biner = parseInt(oktal, 8).toString(2)
    let desimal = parseInt(oktal, 8).toString(10)
    let hexadesimal = parseInt(oktal, 8).toString(16)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        Oktal: oktal,
        Biner: biner,
        Desimal: desimal,
        HexaDsimal: hexadesimal
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/desimal" dengan method POST
app.post("/convert/desimal", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let desimal = Number(req.body.desimal) 

    let biner = parseInt(desimal, 10).toString(2)
    let oktal = parseInt(desimal, 10).toString(8)
    let hexadesimal = parseInt(desimal, 10).toString(16)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        Desimal: desimal,
        Biner: biner,
        Oktal: oktal,
        HexaDsimal: hexadesimal
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/hexadesimal" dengan method POST
app.post("/convert/hexadesimal", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let hexadesimal = req.body.hexadesimal

    let biner = parseInt(hexadesimal, 16).toString(2)
    let oktal = parseInt(hexadesimal, 16).toString(8)
    let desimal = parseInt(hexadesimal, 16).toString(10)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        HexaDsimal: hexadesimal,
        Biner: biner,
        Desimal: desimal,
        Oktal: oktal
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})