import './schema/global.schema';
import express, { Request, Response } from "express";
import cors from "cors";

const PORT = 5000;
const app = express();

/* Extend the Request interface in place to include your custom variable */
// declare global {
//     namespace Express {
//         interface Request {

//         }
//         interface Response {

//         }
//     }
// }
import './schema/global.schema';

// use middleware
app.use(express.json());
app.use(cors());

app.get("/", async (req: Request, res: Response) => {
    res.status(200).send({
        status: 200,
        message: `Server is running successfully at : ${PORT}`,
    });
});

app.listen(PORT, () => {
    console.log(`server is running in : http://localhost:${PORT}`);
});
