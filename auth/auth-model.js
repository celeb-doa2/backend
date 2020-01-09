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
    if (user.username) {
        return db('users')
            .insert(user, ['*'])
    } else {
        return null
    }
}


module.exports = {
    login,
    findByID,
    register
}