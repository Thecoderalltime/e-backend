import mongoose from 'mongoose';


// Product Schema
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
       
    },
    brand: {
        type: String,
        
    },
    category: {
        type: String,
       
    },
    description: {
        type: String,
       
    },
    discountPercentage: {
        type: Number,
       
    },
    images: {
        type: String,
        
    },
    price: {
        type: Number,
        
    },
    stock: {
        type: Number,
       
    },
    thumbnail: {
        type: String,
       
    },
    thumbnail_2: {
        type: String,
       
    },
    thumbnail_3: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const virtual = ProductSchema.virtual("id");
virtual.get(function(){
    return this._id.toString();
})
ProductSchema.set("toJSON",{    
    virtuals: true,
    versionKey: false,
    transform: function(doc, ret){
        delete ret._id;
    }
})

export const Product = mongoose.model("Product", ProductSchema);

