import * as express from 'express';
import * as passport from 'passport';
import * as controller from '../controllers/missingPersonController';
import * as controler from '../controllers/foundPersonController';
import multer from 'multer'

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


//create router
var router = express.Router();
//check route is working
router.get('/',(req,res)=>{
    res.status(200).json("route working!")
})

//route fo adding missing person
router.post('/missing', controller.addMissingPerson);

//route for searching missing person
router.post('/allMissingPersons', controller.allMissingPersons)

//route for adding found person
router.post('/found', controler.addFoundPersons);

//route for searching all found persons
router.post('/allFoundPersons', controler.allFoundPersons)



export default router;