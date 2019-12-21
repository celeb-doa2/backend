const db = require('../data/db-config')

function findFriendScores(filter) {
    return db('users')
        .where(filter)
        .first()
        .then(use => {
            return db('scores')
                .where({ userID: use.id })
        })
}

function findFriendsById(id) {
    return db('friends')
        .where({ user_id: id })
}

function addFriend(addFriend) {
    return db('friends')
        .insert(addFriend, ['*'])
}

function allFriends(id) {
    return db('friends')
        .where({ user_id: id })
}

module.exports = {
    findFriendsById,
    findFriendScores,
    addFriend,
    allFriends
}