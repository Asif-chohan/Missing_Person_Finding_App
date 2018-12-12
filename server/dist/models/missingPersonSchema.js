"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
var missingPersonSchema = mongoose.Schema({
    userName: String,
    missingPersonName: String,
    age: Number,
    description: String,
    gender: String,
    mobNO: Number,
}, {
    timestamps: true,
});
var missingPersonModels = mongoose.model('missingPersons', missingPersonSchema);
exports.default = missingPersonModels;
//# sourceMappingURL=missingPersonSchema.js.map