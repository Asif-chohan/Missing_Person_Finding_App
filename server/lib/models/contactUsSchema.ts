import * as mongoose from 'mongoose';

var contactUsSchema = mongoose.Schema({
    username: String,
    blog: String,
    blogTitle:String,
});

var contactUSModels = mongoose.model('contactUs', contactUsSchema)
module.exports =contactUSModels;
