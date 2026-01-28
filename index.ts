import express, { type Request, type Response } from "express";
import "dotenv/config"
import authRoutes from "./routes/auth.routes"
import profileRoutes from "./routes/profile.routes"
const app = express();
const PORT = process.env.PORT
app.use(express.json());
app.use(express.urlencoded());

app.use("/chat/v1", authRoutes)
app.use("/chat/v1", profileRoutes)
app.listen(3000, () => {
    console.log(PORT, "Server Startekd")
});

