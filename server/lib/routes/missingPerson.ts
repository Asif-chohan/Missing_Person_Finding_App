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
router.post('/missing', controller.addMissingPerson);
router.post('/found', controler.addFoundPersons);



export default router;