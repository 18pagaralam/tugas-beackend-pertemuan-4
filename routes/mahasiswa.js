const express = require('express');
const routerMhs = express.Router();
const connection = require('../db/db')
const ctrMhsm = require('../controllers/mahasiswa')

routerMhs.post('/belajar', ctrMhsm.create)

routerMhs.get('/belajar', ctrMhsm.getMhs)

routerMhs.get('/belajar/:nim', ctrMhsm.getMhsBynim)

routerMhs.put('/belajar/:nim', ctrMhsm.update)

routerMhs.delete('/belajar/:nim', ctrMhsm.delete)

module.exports = routerMhs