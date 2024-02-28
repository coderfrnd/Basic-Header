// schema.js

import mongoose from 'mongoose';

const { Schema } = mongoose;

const pageSchema = new Schema({
    name: { type: String },
    email: { type: String},
    mobile:{type:String}
});

export const Register = mongoose.models.Page || mongoose.model("Page", pageSchema);


