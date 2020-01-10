const server = require('../server')
const db = require('../data/db-config')
const request = require('supertest')

beforeAll(() => {
    return db('users')
        .select(['*'])
        .del()
})

let newU = { username: "test1", password: "testPass" }

describe('Auth Router Testing', () => {

    describe('register test', () => {
        it('should return a 201 response code', async () => {
            const res = await request(server)
                .post("/api/auth/register")
                .send(newU)
                .expect(201)
        })
    })

    describe('login test', () => {
        it('should return a 200 response', async () => {
            const res = await request(server)
                .post("/api/auth/login")
                .send(newU)
                .expect(200)
        })
    })

})