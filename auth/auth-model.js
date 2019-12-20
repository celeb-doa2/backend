const db = require('../data/db-config')

function login(filter) {
    return db('users')
        .where(filter);
}

function findByID(id) {
    return db('users')
        .where({ id })
        .first()
}

function register(user) {
    return db('users')
        .insert(user, ['*'])
}


module.exports = {
    login,
    findByID,
    register
}