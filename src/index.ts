import express from "express";
import jobsRouter from "./api/jobs";

const app = express();
app.use(express.json());

app.use("/jobs", jobsRouter);

app.listen(8000, () => console.log("Server is listening on port 8000."));
