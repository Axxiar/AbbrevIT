const express = require('express')
const path = require('path')
const dbUtility = require('./dbutility')

const app = express()
const clientDirPath = path.join(__dirname, "../client")

app.use(express.static(clientDirPath))

// app.get("/", (req,res) => {
//     res.send(`<h1>AbbrevIT page</h1>`)
// })

app.get("/abbreviations", async (req,res) => {
    a = await dbUtility.selectAll();
    res.send(a);
})

app.listen(5000, () => {
    console.log("Server started on port 5000");
})