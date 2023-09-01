const connectDB = require('./database/database')
const usersRouter = require('./route/users')


const express = require('express')

const app = express()


const cors = require('cors')
app.use(cors({
    origin: '*'
}))


app.use(express.json())

app.use('/users', usersRouter)

app.listen(8080, async () => {
    try {
        await connectDB()
        console.log(`Server is running at port 8080`)
    }
    catch (err) {
        console.log(`Error in the server `)
    }
})