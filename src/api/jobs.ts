import express from "express";
import { createJob, getJobs,getOneJob } from "../application/features/jobs";

const jobsRouter = express.Router();


jobsRouter.route("/").post(createJob).get(getJobs)

jobsRouter.route("/:id").get(getOneJob)


export default jobsRouter;


