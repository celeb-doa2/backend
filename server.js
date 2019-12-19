const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

const celebRouter = require('./celebs/celeb-router')
const authRouter = require('./auth/auth-router')
const authUser = require('./auth/auth-middleware')

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter)
server.use('/api/celebs', authUser, celebRouter)
server.use('/api/free', celebRouter)

module.exports = server