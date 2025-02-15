import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js';
import cors from 'cors';

dotenv.config();

const app = express();

// databse config
connectDB();

// middlewares
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))

// routes
app.use('/api/v1/auth',authRoutes);

app.get("/", (req, res) => {
    res.send("<h1>Welcome to the AI-Mocker!.</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`.bgCyan.white);
});

