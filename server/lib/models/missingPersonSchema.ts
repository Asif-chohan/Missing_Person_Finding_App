import * as mongoose from 'mongoose';

var missingPersonSchema = mongoose.Schema(
    {
        userName: String,
        missingPersonName: String,
        age: Number,
        description: String,
        gender: String,
        mobNO: Number,
        area: String,
        city: String,
        province:String,
        country: String,
        longi: Number,
        lati: Number,
    },
    {
        timestamps: true,
    }
);

var missingPersonModels = mongoose.model('missingPersons', missingPersonSchema);

export default missingPersonModels;