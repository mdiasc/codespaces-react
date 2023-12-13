const { getAllObjects, getObjectById, insereObject, modifyObject, deleteObjectById } = require("../services/objects")

function getObjects(req, res) {
    try {
        const objetos = getAllObjects()
        res.send(objetos)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}

function getObject(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            const objeto = getObjectById(id)
            res.send(objeto)
        } else {
            res.status(422)
            res.send("Id inválido")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}

function postObject(req, res) {
    try {
        
        console.log(req.body); 
        const objetoNovo = req.body
        if(req.body.nome) {
            insereObject(newObject)
            res.status(201)
            res.send("Objeto inserido com sucesso")
        } else {
            res.status(422)
            res.send("O campo nome é obrigatório")
        }        
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchObject(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            const body = req.body
            modifyObject(body, id)
            res.send("Item modificado com sucesso")
        } else {
            res.status(422)
            res.send("Id inválido")
        }       
    } catch(error) {
        res.status(500)
        res.send(error.message) 
    }
}

function deleteObject(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            deleteObjectById(id)
            res.send("Objeto deletado com sucesso")
        } else {
            res.status(422)
            res.send("ID inválido")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}

module.exports = {
    getObjects,
    getObject,
    postObject,
    patchObject,
    deleteObject
}