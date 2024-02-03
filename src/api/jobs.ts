import express from "express";
import { createJob, getJobById, getJobs } from "../application/features/jobs";

const jobsRouter = express.Router();

jobsRouter.route("/").post(createJob).get(getJobs);
jobsRouter.route("/:id").get(getJobById);

export default jobsRouter;
