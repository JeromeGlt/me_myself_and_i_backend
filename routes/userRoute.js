const express = require('express')
const router = express.Router()

// const auth = require('../middleware/auth')
const userController = require('../controllers/userController')

// router.get('/', movieController.getAllMovies)
router.post('/', userController.signup)
// router.delete('/:id', movieController.deleteMovie)
// router.put('/:id', movieController.modifyMovie)
// router.get('/movie/:idUser', auth, movieController.getUserMovies)

module.exports = router