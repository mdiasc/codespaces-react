const {Router} = require("express")

const {getObjects, getObject, postObject, patchObject, deleteObject} = require("../controlers/objects")

const router = Router()

router.get('/', getObjects)

router.get('/:id', getObject)

router.post('/', postObject)

router.patch('/:id', patchObject)

router.delete('/:id', deleteObject)

module.exports = router