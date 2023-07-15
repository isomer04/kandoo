const express = require('express');

const router = express.Router()
const boardsController = require('../controllers/boardsController')
const {ensureAuth} = require('../middleware/auth')

// Getting all the boards
router.get('/', boardsController.getAllBoards)

// Create a board
router.post('/createBoard', ensureAuth, boardsController.createBoard)

// We will not need to get "single board" because we are a SPA - will leverage axios.

// Delete a board
router.delete('/deleteBoard/:id', ensureAuth, boardsController.deleteBoard)

router.get('/populateBoard/:id', boardsController.populateBoard)

module.exports = router;