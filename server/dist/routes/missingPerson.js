"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controller = require("../controllers/missingPersonController");
const controler = require("../controllers/foundPersonController");
//create router
var router = express.Router();
//check route is working
router.get('/', (req, res) => {
    res.status(200).json("route working!");
});
router.post('/missing', controller.addMissingPerson);
router.post('/found', controler.addFoundPersons);
exports.default = router;
//# sourceMappingURL=missingPerson.js.map