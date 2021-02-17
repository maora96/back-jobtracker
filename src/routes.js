const express = require('express')

const router = express.Router()

// auth
router.post('/auth') // login

// user
router.post('/user') //add user
router.get('/user/:id') // get user
router.get('/user/:id/entries') // get all entries by user id
router.delete('/user/:id') // delete user by id

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

//
