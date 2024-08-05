
import express from "express";

const app = express();
const PORT = 4000

app.get("/", (req, res) => {
    res.send(`Get Request`)
})

app.get("/about", (req, res) => {
    req.query.name ? res.send(`My name is ${req.query.name} and age is ${req.query.age}`) : res.send(`About Page`)
})

app.get("/contact", (req, res) => {
    req.query.name ? res.send(`My name is ${req.query.name} , email is ${req.query.email} and contact is ${req.query.phone}`) : res.send(`Contact Page`)
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})