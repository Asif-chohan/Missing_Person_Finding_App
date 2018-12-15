"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const missingPersonSchema_1 = require("../models/missingPersonSchema");
exports.addMissingPerson = (req, res) => {
    let newMissingPerson = new missingPersonSchema_1.default(req.body);
    newMissingPerson.save((err, user) => {
        if (err) {
            res
                .status(500)
                .json("error has been occored!");
        }
        else {
            res
                .status(200)
                .json("successfully registered");
        }
    });
};
//# sourceMappingURL=missingPersonController.js.map