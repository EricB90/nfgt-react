const express = require('express')
const router = express.Router()

const { artistDao: dao } = require('../../daos/dao')

// api/artist
router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})

// api/artist/:id
router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})

// api/artist/create
router.post('/create', (req, res)=> {
    dao.create(req, res)
})

// api/artist/update
router.patch('/update', (req, res)=> {
    dao.update(req, res)
})

module.exports = router