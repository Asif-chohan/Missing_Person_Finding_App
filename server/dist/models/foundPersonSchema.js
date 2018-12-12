"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
var foundPersonSchema = mongoose.Schema({
    userName: String,
    foundPersonName: String,
    estimatedAge: Number,
    description: String,
    gender: String,
    founderMobNO: Number,
    area: String,
    city: String,
    province: String,
    country: String,
    longi: Number,
    lati: Number,
}, {
    timestamps: true,
});
var foundPersonModels = mongoose.model('foundPersons', foundPersonSchema);
exports.default = foundPersonModels;
//# sourceMappingURL=foundPersonSchema.js.map