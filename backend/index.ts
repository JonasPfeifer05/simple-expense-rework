import express, { type Express } from "express";
import cookieParser from "cookie-parser"
import apiRouter from "./routes/api";
import authMiddleware from "./middleware/auth.ts"
import bodyParser from "body-parser";
import cors from "cors";

const app: Express = express();
const port = 3001;

app.use(cors())
app.use(cookieParser());
app.use(bodyParser.json());
app.use(authMiddleware)
app.use("/api", apiRouter);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});