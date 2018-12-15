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

  export let allFoundPersons = (req : Request, res : Response) => {
    
    
    let query: object = {}
    foundPersonsModels.find(query).sort({ date: -1 }).exec((err:any, foundPersons: any) => {

        if(err){
          res.status(404)
        }
        // if  missing Persons  are not available 
        if (foundPersons.length === 0) {
            res.json('Yet there is no missing person Available')
        }

        // if todos are available
        else {
             res.status(200).json(foundPersons)   
        }
    });
    
  };