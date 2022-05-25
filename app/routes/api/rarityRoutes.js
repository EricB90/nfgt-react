const express = require('express')
const router = express.Router()

const { rarityDao: dao } = require('../../daos/dao')

// api/rarity
router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})

// api/rarity/:id
router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})

// api/rarity/create
router.post('/create', (req, res)=> {
    dao.create(req, res)
})

// api/rarity/update
router.patch('/update', (req, res)=> {
    dao.update(req, res)
})

module.exports = router