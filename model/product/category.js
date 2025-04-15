import mongoose from 'mongoose';


// Product Schema
const CategorySchema = new mongoose.Schema({
    value: { type: String, required: true, unique: true },
    label: { type: String, required: true, unique: true },
   
});

const virtual = CategorySchema.virtual("id");
virtual.get(function(){
    return this._id.toString();
})
CategorySchema.set("toJSON",{    
    virtuals: true,
    versionKey: false,
    transform: function(doc, ret){
        delete ret._id;
    }
})

export const Category = mongoose.model("Category", CategorySchema);

