import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // load .env file

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOption = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOption));

// Routes
app.get("/", (req, res) => {
  res.send("Hello this is backend");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});
