const express = require("express") 
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())

app.listen(8000, () =>{
    console.log("Server run on port 8000");
})

// end-point "/BMI" dengan method POST
app.post("/BMI", (req,res) => {
  
    let berat = Number(req.body.berat) 
    let tinggi = Number(req.body.tinggi)

    let hasil = berat / (tinggi*tinggi)
    if(hasil < 18.5){
        status = "Kategori : Kekurangan Berat Badan"
    }else if(hasil >= 18.5 && hasil <=24.9){
        status = "Kategori : Normal(Ideal)"
    }else if(hasil >= 25 && hasil <=29.9){
        status = "Kategori : Kelebihan Berat Badan"
    }else{
        status = "Kategori : Obesitas"
    }

    let response = {
        Tinggi: tinggi,
        Berat: berat,
        Hasil: hasil,
        Status: status
    }

    res.json(response)
})