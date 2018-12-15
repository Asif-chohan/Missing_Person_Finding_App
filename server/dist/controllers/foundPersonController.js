"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const foundPersonSchema_1 = require("../models/foundPersonSchema");
exports.addFoundPersons = (req, res) => {
    let newFoundPerson = new foundPersonSchema_1.default(req.body);
    newFoundPerson.save((err, user) => {
        if (err) {
            res
                .status(500)
                .json("error has been occored!");
        }
        else {
            res
                .status(200)
                .json("Person has been added");
        }
    });
};
//# sourceMappingURL=foundPersonController.js.map