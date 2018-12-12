import {Request, Response, NextFunction} from "express";
import foundPersonsModels from '../models/foundPersonSchema';



export let addFoundPersons = (req : Request, res : Response) => {
  
    let newFoundPerson = new foundPersonsModels(req.body);
    
    newFoundPerson.save((err, user) => {
      if (err) {
        res
          .status(500)
          .json("error has been occored!")
      } else {
        res
          .status(200)
          .json("Person has been added")
      }
    });
  };