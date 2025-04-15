import mongoose, { Schema } from "mongoose"


const orderSchema = new mongoose.Schema({
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    item: { type: [Schema.Types.Mixed], required: true },
    totalAmount: { type: Number, required: true },
    totalItems:{ type:Number, required:true},
    selectedAddress:{ type:[Schema.Types.Mixed],required:true},
    payment:{ type:String,required:true},
    status: {type:String, default:'pendding'}
});


const virtual = orderSchema.virtual("id");
virtual.get(function () {
    return this._id.toString();
})
orderSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
})
export const Order = mongoose.model("Order", orderSchema)