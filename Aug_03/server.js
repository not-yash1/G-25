
import express from "express";
import users from "./data.json" assert { type: "json" };

const app = express();
const PORT = 4000

app.use((req, res, next) => {
    console.log(`Server is running at ${req.protocol}://${req.hostname}${PORT}/${req.path}`);
    next();
})

app.use("/", (req, res, next) => {
    console.log(`Server is running at ${req.protocol}://${req.hostname}${PORT}/${req.path}`);
    next();
})

app.get("/", (req, res) => {
    console.log("Home get")
    res.send(`Get Request`)
})

app.get("/users", (req, res) => {
    res.send(users)
    // console.log("Home get")
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})