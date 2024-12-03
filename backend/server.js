import cors from 'cors';
import express from 'express';
import path from "path";
import "./database/dbConnect.js";
import {errorHandler} from "./middleware/ErrorHandler.js";
import mongodbRouter from "./routes/mongodbRouter.js";
import pokefightRouter from "./routes/pokefightRouter.js";

const app = express();
const PORT = 8000;
const __dirname = path.resolve();

// Set headers for CORS policy due to localhost environment
app.use(cors());
app.use(express.json());

app.use("/api/pokemon", pokefightRouter);
app.use('/api/player', mongodbRouter);

app.use(express.static(path.join(__dirname, "frontend/dist")));
app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
})

app.use(errorHandler);
app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));
