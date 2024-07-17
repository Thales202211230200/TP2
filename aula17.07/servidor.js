const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get('/teste', (request, response) => {
var resposta = ""

 response.render('rayane', {resposta})
})

app.post('/resultado1', (request, response) => {
    resposta = parseFloat (request.body.n1) + parseFloat(request.body.n2)

    response.render('rayane')
   })

   app.post('/resultado2', (request, response) => {
    resposta = parseFloat (request.body.n1) - parseFloat(request.body.n2)

    response.render('rayane')
   })

   app.post('/resultado3', (request, response) => {
    resposta = parseFloat (request.body.n1) * parseFloat(request.body.n2)

    response.render('rayane')
   })

   app.post('/resultado4', (request, response) => {
    resposta = parseFloat (request.body.n1) / parseFloat(request.body.n2)

    response.render('rayane')
   })

app.listen(8080)