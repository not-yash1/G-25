
// import express from "express";
// import users from './data.json' assert { type: 'json' };

const express = require("express");
const users = require('./data.json')

const app = express();
const PORT = 4000

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    console.log(`Server is running at ${req.protocol}://${req.hostname}${PORT}/${req.path}`);
    next();
})

app.get("/", (req, res) => {
    res.send(`Home Page`)
})

app.get("/about", (req, res) => {
    res.send(`About Page`)
})

app.get("/users", (req, res) => {
    res.send(users)
})

app.get("/api/users", (req, res) => {
    const html = `
    <ul>
        ${users.map(user => `<li>${user.first_name}</li>`).join('')}
    </ul>
    `
    res.send(html);
})

app.get("/users/:id", (req, res) => {
    const id = req.params.id
    const user = users.find(user => user.id == id)
    res.send(user)
})

app.post("/api/users", (req, res) => {
    const body = req.body;
    console.log(body);
    users.push({...body, id: users.length + 1})
    res.send("User added successfully...")
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})








// app.delete("/users/:id", (req, res) => {
//     const id = req.params.id
//     const user = users.filter(user => user.id != id)
//     res.send("User Deleted successfully...")
// })