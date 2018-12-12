import * as mongoose from 'mongoose';

var contactUsSchema = mongoose.Schema({
    username: String,
    email: String,
    message:String
});

var contactUSModels = mongoose.model('contactUs', contactUsSchema)
module.exports =contactUSModels;
