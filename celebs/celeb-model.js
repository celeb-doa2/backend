const db = require('../data/db-config')

function getCeleb() {
    return db('celebs')
        .then(res => {
            let calcID = Math.random() * (res.length - 0)

            return db('celebs')
                .where({ id: calcID }
                    .first()
                    .then(cel => {
                        return cel
                    })

                )
        })

}

function addCeleb(newCeleb) {
    return db('celebs')
        .insert(newCeleb, ['*'])
        .then(res => {
            return res
        })
}

module.exports = {
    getCeleb,
    addCeleb
}