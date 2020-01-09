const db = require('../data/db-config')

function getCeleb() {
    return db('celebs')
        .then(res => {
            let calcID = Math.random() * (res.length - 0)
            let roundID = Math.round(calcID)

            return db('celebs')
                .where({ id: roundID })
                .first()
                .then(cel => {
                    if (cel.death > 0) {
                        cel.dead = true
                    } else if (cel.death === 0) {
                        cel.dead = false
                    }
                    return cel
                })
        })

}

function allCelebs() {
    return db('celebs')
        .then(res => {
            return res
        })
}

function addCeleb(newCeleb) {
    return db('celebs')
        .insert(newCeleb, ['*'])
}

function editCeleb(newData) {
    const { id, ...changes } = newData;
    return db('celebs')
        .where({ id })
        .update(changes, ['*'])
        .then(([updates]) => updates)
}

module.exports = {
    getCeleb,
    addCeleb,
    allCelebs,
    editCeleb
}