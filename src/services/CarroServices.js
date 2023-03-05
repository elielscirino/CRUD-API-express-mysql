const db = require('../db')

module.exports = {
    buscarTodos: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM carros', (error, result) => {
                if (error) {reject(error); return}
                resolve(result)
            })
        })
    },
    
    buscarCarro: (codigo) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM carros WHERE codigo = ?`, [codigo],
            (error, result) => {
                if (error) {reject(error); return}
                if (result.length > 0) resolve(result[0])
                else resolve(false)
            })
        })
    },

    inserirCarro: (modelo, placa) => {
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO carros (modelo, placa) VALUES (?, ?)`, [modelo, placa],
            (error, result) => {
                if (error) {reject(error); return}
                resolve(result.insertCodigo)
            })
        })
    },

    alterarCarro: (codigo, modelo, placa) => {
        return new Promise((resolve, reject) => {
            db.query('UPDATE carros SET modelo = ?, placa = ? WHERE codigo = ?', [modelo, placa, codigo],
            (error, result) => {
                if (error) {reject(error); return}
                resolve(result)
            })
        })
    },

    excluirCarro: (codigo) => {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM carros WHERE codigo = ?', [codigo], (error, result) => {
                if (error) {reject(error); return}
                resolve(result)
            })
        })
    }
}