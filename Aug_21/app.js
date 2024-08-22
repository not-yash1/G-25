
import express from 'express'
import { createUser, deleteUser, getUser, getUsers, updateUser } from './controllers/userController.js';

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.post("/api/user", createUser)

app.get("/api/users", getUsers)

app.get("/api/get/user/:id", getUser)

app.put("/api/update/user/:id", updateUser)

app.delete("/api/delete/user/:id", deleteUser)

export default app;