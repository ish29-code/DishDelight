/*import express from "express";
import cors from 'cors';
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoute.js";
import foodRouter from "./routes/foodRoute.js";
import 'dotenv/config';
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import path from 'path';
import { fileURLToPath } from 'url'; // Import fileURLToPath

// Create __dirname equivalent in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// app config
const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(cors());

// DB connection
connectDB();


// API endpoints
app.use("/api/user", userRouter);
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'));
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Default route
app.get("/", (req, res) => {
    res.send("API Working");
});

// Start the server
app.listen(port, () => console.log(`Server started on http://localhost:${port}`));*/
