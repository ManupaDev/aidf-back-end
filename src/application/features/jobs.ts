import { NextFunction, Request, Response } from "express";
import Job from "../../persistance/entities/jobs";
import NotFoundError from "../../domain/errors/not-found-error";

export const getJobs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const jobs = await Job.find();
    return res.status(200).json(jobs);
  } catch (error) {
    next(error);
  }
};

export const createJob = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const job = req.body;
    await Job.create(job);
    return res.status(201).send();
  } catch (error) {
    next(error);
  }
};

export const getJobById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const job = await Job.findById(req.params.id);
    if (job === null) {
      throw new NotFoundError("Job not found");
    }
    return res.status(200).json(job);
  } catch (error) {
    next(error);
  }
};
