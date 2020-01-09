const server = require('../server')
const db = require('../data/db-config')
const request = require('supertest')

afterEach(() => {
    return db('users')
        .select(['*'])
        .del()
})

let newU = { username: "test1", password: "testPass" }

describe('Auth Router Testing', () => {

    describe('register test', () => {
        it('should return a welcome message if username is changed', async () => {
            const res = await request(server)
                .post("/api/auth/register")
                .send(newU)
                .expect(201)
        })
    })

})