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

  // person by name
export const getperson = (req: Request, res: any, next: NextFunction) => {

  //  person agains this provided name
  const { missingPersonName }: any = req.params;

  foundPersonsModels.find(missingPersonName).exec((err: any, person: any) => {

      if (err) {
          return res.status(404);
      }
      // if no person is available against provided id
      if (person.length === 0) {
          
          return res.send("Sorry no person is found against this name please search by picture")
      }

      // if person is available
      else {
          return res.status(200).json(person);
      }

  })
}