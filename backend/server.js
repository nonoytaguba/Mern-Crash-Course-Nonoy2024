import express from 'express'; //const express = require('express');
import dotenv from "dotenv";
import path from "path";

import{connectDB} from './config/db.js';

import productRoutes from './routes/product.route.js'

dotenv.config();

const app= express();
const PORT= process.env.PORT || 5000

const __dirname = path.resolve();
app.use(express.json()) // allows us to accept JSON data in teh req.body

app.use("/api/products", productRoutes);

if(process.env.NODE_ENV === "production") {
    console.log(process.env.NODE_ENV)
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    })
}

console.log(process.env.MONGO_URI);
app.listen(PORT, () => {
    connectDB();
    console.log('Server started at http://localhost:'+ PORT)
})

//2:05:48










