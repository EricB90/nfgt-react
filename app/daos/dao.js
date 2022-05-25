const daoCommon = require('./common/daoCommon')

const nfgtDao = {
    ...daoCommon,
    ...require('./api/nfgtDao')
}

const artistDao = {
    ...daoCommon,
    ...require('./api/artistDao')
}

const rarityDao = {
    ...daoCommon,
    ...require('./api/rarityDao')
}

const userDao = {
    ...daoCommon,
    ...require('./api/userDao')
}

module.exports = {
    nfgtDao,
    artistDao,
    rarityDao,
    userDao
}