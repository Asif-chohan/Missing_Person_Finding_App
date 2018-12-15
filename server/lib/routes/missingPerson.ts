import * as express from 'express';
import * as passport from 'passport';
import * as controller from '../controllers/missingPersonController';
import * as controler from '../controllers/foundPersonController';
import * as multer from 'multer';
import * as uniqid from 'uniqid';
//create router
var router = express.Router();
//check route is working
router.get('/',(req,res)=>{
    res.status(200).json("route working!")
})

// ******** Multer (file storage) ********
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        var savePath = __dirname + '/images';
        cb(null, savePath)
    },
    filename: function (req, file, cb) {
        cb(null, uniqid() + '-' + file.originalname);
    }
})

var uploadPics = multer({
    storage: storage
})

var cpUpload = uploadPics.fields([{
    name: 'images',
    maxCount: 8
}])

// ********/ Multer ********


//route fo adding missing person
router.post('/missing', cpUpload,  controller.addMissingPerson);

//route for searching missing person
router.get('/allMissingPersons', controller.allMissingPersons);

//route for adding found person
router.post('/found', cpUpload,  controler.addFoundPersons);

//route for searching all found persons
router.get('/allFoundPersons', controler.allFoundPersons);

//route for searching found person by name
router.get('/foundPersonByName', controler.getperson)



export default router;