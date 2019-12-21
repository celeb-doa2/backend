const db = require('../data/db-config')

function uploadScore(score) {
    return db('scores')
        .insert(score, ['*'])
}

function getScores(id) {
    return db('scores')
        .where({ userID: id })
}

module.exports = {
    uploadScore,
    getScores
}