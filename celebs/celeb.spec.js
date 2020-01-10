const server = require('../server')
const db = require('../data/db-config')
const request = require('supertest')

const newU = { username: "testU", password: "abc123" }

beforeAll((done) => {
    request(server)
        .post("/api/auth/register")
        .send(newU)
        .then(nope => {
            request(server)
                .post("/api/auth/login")
                .send(newU)
                .end((err, res) => {
                    token = res.body.token
                    done()
                })
        })
})


// Tests

describe('Celeb Router Testing', () => {

    describe('Get single celebrity', () => {
        it('should return a celebrity', async () => {
            const res = await request(server)
                .get("/api/celebs/")
                .then((res) => {
                    expect(res.status).toBe(401)

                })
        })
    })

    describe('An authorized test', () => {
        it('It responds with JSON', () => {
            request(server)
                .get("/api/celebs/")
                .set('Authorization', toString(token))
                .then(res => {
                    expect(res.status).toBe(200)
                })
        })
    })

})