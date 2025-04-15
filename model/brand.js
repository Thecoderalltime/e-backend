import mongoose from 'mongoose';


// Product Schema
const BrandSchema = new mongoose.Schema({
    value: { type: String, required: true, unique: true },
    label: { type: String, required: true, unique: true },
   
});

const virtual = BrandSchema.virtual("id");
virtual.get(function () {
    return this._id.toString();
})
BrandSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
})


export const Brand = mongoose.model("Brand", BrandSchema);

