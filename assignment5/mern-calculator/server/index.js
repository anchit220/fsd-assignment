const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

/* 🔹 MongoDB Connection FIRST */
mongoose.connect("mongodb://127.0.0.1:27017/calculator");

mongoose.connection.on("connected", () => {
    console.log("MongoDB connected");
});

/* 🔹 Schema */
const HistorySchema = new mongoose.Schema({
    expression: String,
    result: String,
});

const History = mongoose.model("History", HistorySchema);

/* 🔹 Routes */
app.post("/save", async (req, res) => {
    console.log("API HIT:", req.body);

    const { expression, result } = req.body;

    const newData = new History({ expression, result });
    await newData.save();

    res.send("Saved");
});

app.get("/", (req, res) => {
    res.send("Backend is running 🚀");
});

/* 🔹 Server */
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get("/history", async (req, res) => {
    const data = await History.find();
    res.json(data);
});
