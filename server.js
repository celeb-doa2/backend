const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

const celebRouter = require('./celebs/celeb-router')
const authRouter = require('./auth/auth-router')
const { userAuthTest } = require('./auth/auth-middleware')
const scoreRouter = require('./scores/score-router.js')
const friendRouter = require('./friends/friend-router')

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter)
server.use('/api/celebs', userAuthTest, celebRouter)
server.use('/api/free', celebRouter)
server.use('/api/scores', userAuthTest, scoreRouter)
server.use('/api/friends', userAuthTest, friendRouter)

module.exports = server