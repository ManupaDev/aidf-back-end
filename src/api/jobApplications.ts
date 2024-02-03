import express from "express";
import {
  createJobApplication,
  getJobApplications,
} from "../application/features/jobApplications";

const jobApplicationsRouter = express.Router();
jobApplicationsRouter
  .route("/")
  .post(createJobApplication)
  .get(getJobApplications);
//   .get(getJobApplications);
// jobApplicationsRouter.route("/:id").get(getJobApplicationById);

export default jobApplicationsRouter;
