
import express from 'express'
import { createUser, getUsers } from './controllers/userController.js';

const app = express()

app.use(express.urlencoded({ extended: true }))

app.post("/api/user", createUser)

app.get("/api/users", getUsers)

// app.get("/api/get/user/:id", getUser)

export default app;