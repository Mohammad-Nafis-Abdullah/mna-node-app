import "./schema/global.schema";
import express from "express";
import cors from "cors";
import rootRouter from "./routes/root.router";
import notFoundRouter from "./routes/not-found.router";

// variables
const PORT = 5000;
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// all routes
app.use("/", rootRouter);

// not found routes
app.use("*", notFoundRouter);

app.listen(PORT, () => {
    console.log(`server is running in : http://localhost:${PORT}`);
});
