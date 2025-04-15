import mongoose from 'mongoose';


// Product Schema
const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true, min: 1, max: 1000 },
    discountPercentage: { type: Number, required: true },
    rating: { type: Number, required: true },
    stock: { type: Number, required: true, default: 0 },
    tags: [{ type: String }],
    brand: { type: String, required: true },
    sku: { type: String, required: true, unique: true },
    weight: { type: Number, required: true },
    dimensions: {
        width: { type: Number, required: true },
        height: { type: Number, required: true },
        depth: { type: Number, required: true }
    },
    warrantyInformation: { type: String },
    shippingInformation: { type: String },
    availabilityStatus: { type: String, required: true },
    reviews: [
        {
            rating: { type: Number, required: true },
            comment: { type: String, required: true },
            date: { type: Date, default: Date.now },
            reviewerName: { type: String, required: true },
            reviewerEmail: { type: String, required: true }
        }
    ],
    returnPolicy: { type: String },
    minimumOrderQuantity: { type: Number, required: true },
    meta: {
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
        barcode: { type: String, required: true },
        qrCode: { type: String }
    },
    images: [{ type: String }],
    thumbnail: { type: String }
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

