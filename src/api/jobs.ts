import express from "express";
import { createJob, getJobs } from "../application/features/jobs";

const jobsRouter = express.Router();

jobsRouter.route("/").get(getJobs).post(createJob);

export default jobsRouter;
