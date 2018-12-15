import * as express from 'express';
import * as passport from 'passport';
import * as controller from '../controllers/missingPersonController';
import * as controler from '../controllers/foundPersonController';

//create router
var router = express.Router();
//check route is working
router.get('/',(req,res)=>{
    res.status(200).json("route working!")
})

//route fo adding missing person
router.post('/missing', controller.addMissingPerson);

//route for searching missing person
router.get('/allMissingPersons', controller.allMissingPersons);

//route for adding found person
router.post('/found', controler.addFoundPersons);

//route for searching all found persons
router.get('/allFoundPersons', controler.allFoundPersons);

//route for searching found person by name
router.get('/foundPersonByName', controler.getperson)



export default router;