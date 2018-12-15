import * as mongoose from 'mongoose';

var foundPersonSchema = mongoose.Schema(
    {
        userName: String,
        foundImage:String,
        foundPersonName: String,
        estimatedAge: Number,
        description: String,
        gender: String,
        founderMobNO: Number,
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

var foundPersonModels = mongoose.model('foundPersons', foundPersonSchema);

export default foundPersonModels;