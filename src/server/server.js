const express = require('express')
const path = require('path')

const app = express()
const clientDirPath = path.join(__dirname, "../client")


app.get("/", (req,res) => {
    res.send(`<h1>AbbrevIT page</h1>`)
})

app.get("/abbreviations", (req,res) => {
    res.json({
        "abbreviations": {
            "SQL" :["Structured Query Language", "SQL desc"],        
            "HTML":["HyperText Markup Language", "HTML desc"]
        }
    })
})

app.listen(5000, () => {
    console.log("Server started on port 5000");
})