const express = require('express')
const router = express.Router()

const carroController = require('./controllers/CarroController')

router.get('/carros', carroController.buscarTodos)
router.get('/carro/:codigo', carroController.buscarCarro)
router.post('/carro', carroController.inserirCarro)
router.put('/carro/:codigo', carroController.alterarCarro)
router.delete('/carro/:codigo', carroController.deletarCarro)

module.exports = router