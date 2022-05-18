var consulta = require('../models/Consulta')
var mongoose = require('mongoose')


//modelo (modelo, obj definido como schema na classe)
const consulta_model = mongoose.model('Consulta', consulta)

class ConsultaService{
    async Create(nome, email, descricao, cpf, data, horario){
        var newConsulta = new consulta_model({
            nome,
            email,
            descricao,
            cpf,
            data,
            horario, 
            termino: false
        })
        try{
            await newConsulta.save()
            return true
        }catch(err){
            console.log(err)
            return false
        }
        
    }


}



module.express = new ConsultaService()