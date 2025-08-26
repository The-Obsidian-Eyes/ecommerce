const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require('./routes/auth/auth-routes')

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
app.use("/api/auth", authRouter);
// app.use("/api/admin/products", adminProductsRouter);
// app.use("/api/admin/orders", adminOrderRouter);

// app.use("/api/shop/products", shopProductsRouter);
// app.use("/api/shop/cart", shopCartRouter);
// app.use("/api/shop/address", shopAddressRouter);
// app.use("/api/shop/order", shopOrderRouter);
// app.use("/api/shop/search", shopSearchRouter);
// app.use("/api/shop/review", shopReviewRouter);

// app.use("/api/common/feature", commonFeatureRouter);
app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));