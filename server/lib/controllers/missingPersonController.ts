import {Request, Response, NextFunction} from "express";
import missingPersonsModels from '../models/missingPersonSchema';




export let addMissingPerson = (req : Request, res : Response) => {
  
    let newMissingPerson = new missingPersonsModels(req.body);
    
    newMissingPerson.save((err, user) => {
      if (err) {
        res
          .status(500)
          .json("error has been occored!")
      } else {
        res
          .status(200)
          .json("successfully registered")
      }
    });
  };