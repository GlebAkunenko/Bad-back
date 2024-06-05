import * as express from "express"
import { db } from "./data-source";
import * as user from './routes/user'

const cors = require("cors")

// establish database connection
db
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")

        const app = express()
        app.use(express.json())
        app.use(cors({
            origin: "http://localhost:3000"
        }))

        app.get('/users', user.getUsers)
        app.get('/user/:id', user.getUser)
        app.post('/user', user.addUser)

        app.listen(4444)
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })
