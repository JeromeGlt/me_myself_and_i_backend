require('dotenv').config()

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

// const movieRoutes = require('./routes/post')
// const userRoutes = require('./routes/user')
// const likeRoutes = require('./routes/like')
// const refreshRoutes = require('./routes/refresh')

const app = express()

app.use(cors())
app.use(helmet())

app.use(express.json())

// app.use('/api/auth', userRoutes)
// app.use('/api/posts', movieRoutes)
// app.use('/api/posts', likeRoutes)
// app.use('/api/posts/getId', refreshRoutes)

module.exports = app