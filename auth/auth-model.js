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
        .then(res => {
            return db('users')
                .where({ id: res.id })
                .first()
                .then(newU => {
                    return newU
                })
        })
}


module.exports = {
    login,
    findByID,
    register
}