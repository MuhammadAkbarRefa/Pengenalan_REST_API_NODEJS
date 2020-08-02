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
app.listen(8000, () => {
    console.log("Server run on port 8000");
})

//End point 1
app.post("/balok", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let panjang = Number(req.body.panjang) // mengambil nilai panjang dari body
    let lebar = Number(req.body.lebar) // mengamil nilai lebar dari body
    let tinggi = Number(req.body.tinggi)

    let volume = panjang * lebar * tinggi
    let luas_permukaan = 2 * ((panjang * lebar) + (panjang * tinggi) + (lebar * tinggi))

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        volume: volume,
        luas_permukaan: luas_permukaan
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

//End point 2
app.post("/kubus", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let sisi = Number(req.body.sisi) 

    let volume = sisi ** 3 
    let luas_permukaan = 6 * (sisi ** 2)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        sisi: sisi,
        volume: volume,
        luas_permukaan: luas_permukaan
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

//End point 3
app.post("/tabung", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let jarijari = Number(req.body.jarijari) 
    let tinggi = Number(req.body.tinggi)

    let volume = 3.14 * (jarijari ** 2) * tinggi 
    let luas_permukaan = (2 * 3.14 * jarijari * tinggi) + (2 * 3.14 * (jarijari ** 2))
    let luas_selimut = 2 * 3.14 * jarijari * tinggi

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        jarijari: jarijari,
        tinggi: tinggi,
        volume: volume,
        luas_permukaan: luas_permukaan,
        luas_selimut: luas_selimut
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

//End point 4
app.post("/bola", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let jarijari = Number(req.body.jarijari) 

    let volume = (4 * 3.14 * (jarijari ** 3)) / 3
    let luas_permukaan = 4 * 3.14 * (jarijari ** 2)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        jarijari: jarijari,
        volume: volume,
        luas_permukaan: luas_permukaan
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})