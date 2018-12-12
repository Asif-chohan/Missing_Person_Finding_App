"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
var contactUsSchema = mongoose.Schema({
    username: String,
    email: String,
    message: String
});
var contactUSModels = mongoose.model('contactUs', contactUsSchema);
module.exports = contactUSModels;
//# sourceMappingURL=contactUsSchema.js.map