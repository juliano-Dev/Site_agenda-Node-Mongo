const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const consultaService = require('./services/ConsultaService')


//arquivos de conf
app.use(express.static("puclic"))

//recebe dados do post em json
app.use(bodyParser.json())

//define layout das paginas
app.set('view engine', 'ejs')

//instancia conexao com o banco mongo 
mongoose.connect('mongodb://localhost:27017/agendamento')

app.get('/', (req, res) =>{
    res.send('Olá.')
})

app.get('/cadastro', (req, res) =>{
    res.render('create')
})

app.post('/create', async (req, res) =>{
    var status = await consultaService.Create(
        req.body.nome,
        req.body.email,
        req.body.descricao,
        req.body.cpf,
        req.body.data,
        req.body.horario
    )
    if(status) {res.redirect('/')}
    else {res.send('Falha ao cadastrar.')}
})





app.listen(8080, ()=>{})