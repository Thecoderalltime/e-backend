import mongoose,{Schema} from "mongoose"
const cartSchema  =  new mongoose.Schema({
    quantity:{ type: Number, required:true},
    product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true }
});


const virtual = cartSchema.virtual("id");
virtual.get(function () {
    return this._id.toString();
})
cartSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
})
export const Cart = mongoose.model("Cart", cartSchema)