const express = require("express") 
const bodyParser = require("body-parser") 
const cors = require("cors") 
const app = express()


app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())

app.listen(8000, () => {
    console.log("Server run on port 8000");
})



app.get("/convert/celcius/:celcius", (req,res) => {
    

    
    let celcius = req.params.celcius 
 
    let reamur = parseInt(celcius) * 4 / 5
    let fahrenheit = parseInt(celcius) * 9 / 5 + 32 
    let kelvin = parseInt(celcius) + 273

    let response = {
        celcius: celcius,
        result:{
          reamur: reamur,
          fahrenheit: fahrenheit,
          kelvin: kelvin,
        }
      }

    res.json(response)

})

    app.get("/convert/reamur/:reamur", (req,res) => {
        

        
        let reamur = req.params.reamur 
    
        let celcius = reamur * 5 / 4
        let fahrenheit = reamur * 9 / 4 + 32 
        let kelvin = reamur * 5 / 4 + 273

        let response = {
            reamur: reamur,
            result:{
            celcius: celcius,
            fahrenheit: fahrenheit,
            kelvin: kelvin,
            }
        }

        res.json(response)

    })

    app.get("/convert/fahrenheit/:fahrenheit", (req,res) => {
        

        
        let fahrenheit = req.params.fahrenheit 
    
        let celcius = (fahrenheit - 32) * 5 / 9
        let reamur = (fahrenheit - 32) * 4 / 9
        let kelvin = ((fahrenheit - 32) * 5 / 9) + 273

        let response = {
            fahrenheit: fahrenheit,
            result:{
            celcius: celcius,
            reamur: reamur,
            kelvin: kelvin,
            }
        }
        res.json(response)
    })

    app.get("/convert/kelvin/:kelvin", (req,res) => {
       let kelvin = req.params.kelvin 
    
        let celcius = kelvin - 273
        let reamur = (kelvin - 273) * 4 / 5
        let fahrenheit = (kelvin - 273) *    9 / 5 + 32

        let response = {
            kelvin: kelvin,
            result:{
            celcius: celcius,
            fahrenheit: fahrenheit,
            reamur: reamur,
            }
        }

        res.json(response)

    })