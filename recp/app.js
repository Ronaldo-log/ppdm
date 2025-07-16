const express = require("express")
const app = express()
const porta = 5000

app.listen(porta, () => {
    console.log(`${porta}`)
})

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index")
})
app.get("/saudacao", (req, res) => {
    let nome = req.query.nome
    let numero = Number(req.query.numero)
    let dobro = numero * 2
    res.render("saudacao",
        {nome, numero, dobro})
})