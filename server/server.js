const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require("cookie-parser");
const cors = require("cors");

mongoose
    .connect('mongodb+srv://ariffoysalruetcse21:PjjBDZzxQWziP6xs@cluster0.84heeez.mongodb.net/')
    .then(()=> console.log('MongoDB connected'))
    .catch(error => console.log(error));

const app = express()
const PORT = process.env.PORT || 5000

app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization", "Cache-Control", "Expires", "Pragma"],
        // exposedHeaders: ["Content-Length", "X-Content-Type-Options"],
        credentials: true,
    })
)

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));