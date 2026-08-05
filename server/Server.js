require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const todoRoutes = require("./routes/todoRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database
connectDB();

// Routes
app.use("/api/todos", todoRoutes);

// Home Route
app.get("/", (req, res) => {
    res.send("<h1>Todo API Running...</h1>");
});

// Server
app.listen(3200, () => {
    console.log("Server running on port 3200");
});