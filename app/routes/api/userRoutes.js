const express = require('express')
const router = express.Router()

const { userDao: dao } = require('../../daos/dao')

// api/user
router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})

// api/user/:id
router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})

// api/user/create
router.post('/create', (req, res)=> {
    console.log(req.body)
    dao.create(req, res)
})

router.post('/login', (req, res)=> {
    dao.signIn(req, res)
})

// api/user/update
router.post('/update', (req, res)=> {
    dao.update(req, res)
})

module.exports = router