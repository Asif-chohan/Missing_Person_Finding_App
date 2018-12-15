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

  // All missing persons
  export let allMissingPersons = (req : Request, res : Response) => {
     
    let query: object = {}
    missingPersonsModels.find(query).sort({ date: -1 }).exec((err:any, missingPersons: any) => {

        if(err){
          res.status(404)
        }
        // if  missing Persons  are not available 
        if (missingPersons.length === 0) {
            res.json('Yet there is no missing person Available')
        }
        // if todos are available
        else {
             res.status(200).json(missingPersons)   
        }
    });   
  };