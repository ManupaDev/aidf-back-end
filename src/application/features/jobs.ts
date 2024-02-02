import { NextFunction, Request, Response } from "express";
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

  export const getJobs = async (req: Request, res: Response) => {
  try {
    return res.status(200).json(jobs);
  } catch (error) {
    return res.status(500).send();
  }
};

export const createJob = async (req: Request, res: Response) => {
  try {
    console.log(req.body)
    jobs.push(req.body)
    return res.status(200).json(jobs)
  } catch (error) {
    return res.status(500).send();
  }
};

export const getOneJob = async (req: Request, res: Response) => {
  try {
    console.log(req.params.id)

    let newJob = null
    jobs.map(jb=>{
      if(jb._id == req.params.id){
          newJob = jb
      }
    })
    return res.status(200).json(newJob);
  } catch (error) {
    return res.status(500).send();
  }
};
