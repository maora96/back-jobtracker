const express = require('express')

const router = express.Router()

const User = require('./controllers/user')

// auth
router.post('/auth') // login

// user
router.post('/user', User.addUser) //add user
router.get('/user/:id', User.getUser) // get user
router.get('/user/:id/entries', User.getUserEntries) // get all entries by user id
router.delete('/user/:id', User.deleteUser) // delete user by id

// entries
router.post('/entries') // add entry
router.get('/entries') // get all entries
router.get('/entries/:id') // get entry by id
router.get('/entries/:id/interactions') // get all interactions by entry id
router.delete('/entries/:id') // delete by id
router.put('/entries/:id') // update by id

// intereactions
router.post('/interactions') // add interaction
router.get('/interactions/:id') // get interaction by id
router.put('/interactions/:id') // update interaction by id
router.delete('/interactions/:id') // delete interaction by id

module.exports = router
