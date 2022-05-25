const express = require('express')
const router = express.Router()

const { nfgtDao: dao } = require('../../daos/dao')

// api/nfgt
router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})

// api/nfgt/:id
router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})

// api/nfgt/create
router.post('/create', (req, res)=> {
    dao.create(req, res)
})

// api/nfgt/update
router.patch('/update', (req, res)=> {
    dao.update(req, res)
})

module.exports = router