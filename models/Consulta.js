const mongoose = require('mongoose')

const consulta = new mongoose.Schema({
    name: String,
    email: String,
    descricao: String,
    cpf: String,
    data: Date,
    horario: String,
    termino: Boolean
})

module.exports = consulta
