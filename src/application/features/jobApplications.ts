import { NextFunction, Request, Response } from "express";
import JobApplication from "../../persistance/entities/JobApplication";
import NotFoundError from "../../domain/errors/not-found-error";
import { generateRating } from "./rating";

export const createJobApplication = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const jobApplication = req.body;
    const createdJobApplication= await JobApplication.create(jobApplication);
    generateRating(createdJobApplication._id)
    return res.status(201).send();
  } catch (error) {
    next(error);
  }
};

export const getJobApplications = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { jobId } = req.query;
    if (!jobId) {
      const jobApplications = await JobApplication.find()
        .populate("job")
        .exec();
      return res.status(200).json(jobApplications);
    }
    const jobApplications = await JobApplication.find({ job: jobId });
    return res.status(200).json(jobApplications);
  } catch (error) {
    next(error);
  }
};

export const getJobApplicationById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const jobApplication = await JobApplication.findById(id);
    if (jobApplication === null) {
      throw new NotFoundError("Job Application not found");
    }
    return res.status(200).json(jobApplication);
  } catch (error) {
    next(error);
  }
};
