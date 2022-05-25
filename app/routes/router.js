const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3005

router.get('/', (req, res)=> {
    res.json({
        'All NFGTs': `http://localhost:${PORT}/api/nfgt`,
        'All Artists': `http://localhost:${PORT}/api/artist`,
        'All Rarities': `http://localhost:${PORT}/api/rarity`,
        'All Users': `http://localhost:${PORT}/api/user`
    })
})

router.use('/nfgt', require('./api/nfgtRoutes'))
router.use('/artist', require('./api/artistRoutes'))
router.use('/rarity', require('./api/rarityRoutes'))
router.use('/user', require('./api/userRoutes'))

module.exports = router
