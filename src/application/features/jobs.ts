import { NextFunction, Request, Response } from "express";

export const getJobs = async (req: Request, res: Response) => {
  try {
    const jobs = [
      {
        _id: "xyz",
        title: "Intern - Software Engineer",
        type: "Full-time",
        location: "Remote",
      },
      {
        _id: "abc",
        title: "Software Engineer",
        type: "Full-time",
        location: "Remote",
      },
    ];
    return res.status(200).json(jobs);
  } catch (error) {
    return res.status(500).send();
  }
};

export const createJob = async (req: Request, res: Response) => {
  try {
    return res.status(200).send();
  } catch (error) {
    return res.status(500).send();
  }
};
