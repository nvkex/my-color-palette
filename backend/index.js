const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require("client-sessions");
const dotenv = require('dotenv').config();

// Route Dependencies
const defaultRouter = require('./routes/default');
const authRouters = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(session({
    cookieName: 'session',
    secret: process.env.SESSION_KEY,
    duration: 600 * 60 * 1000,
    httpOnly: true,
    secure: true,
    ephemeral: true
}));

// Connect MongoDB
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(res => {
    console.log('mongoDB connected to ' + res.connection.host);
})
.catch(e => {
    console.log(e);
})

// Routes
app.use('/', defaultRouter);
app.use('/auth',authRouters);

// Listen on a port
app.listen(PORT, () => {
    console.log('Listening on ' + PORT);
})