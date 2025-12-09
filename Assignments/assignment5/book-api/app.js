const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Middleware for logging
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Body parser
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/bookDB")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// Routes
const bookRoutes = require("./routes/bookRoutes");
app.use("/books", bookRoutes);

app.listen(5000, () => {
    console.log(`Server running on port http://localhost:${5000}`);
});