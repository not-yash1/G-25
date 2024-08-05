
import express from "express";

const app = express();
const PORT = 4000

app.use((req, res, next) => {
    console.log(`Server is running at ${req.protocol}://${req.hostname}${PORT}/${req.path}`);
    next();
})

app.use("/about", (req, res, next) => {
    console.log(`Server is running at ${req.protocol}://${req.hostname}${PORT}/about${req.path}`);
    next();
})

app.get("/", (req, res) => {
    res.send(`Home Page`)
})

app.get("/about", (req, res) => {
    res.send(`About Page`)
})

app.get("/contact", (req, res) => {
    res.send(`Contact Page`)
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})