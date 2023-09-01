const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({

    email: String,
    password: String
})

const usersModel = mongoose.model('users', usersSchema)

module.exports = { usersModel }