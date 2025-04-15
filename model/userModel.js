
import mongoose,{Schema} from "mongoose";


const userSchema = new mongoose.Schema({
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String,  default: "user" },
    address: { type: [Schema.Types.Mixed], default: [] },
    order: { type: [Schema.Types.Mixed], default:[] }
})

const virtual = userSchema.virtual("id")

virtual.get(function(){
    return this._id.toString()
})

userSchema.set("toJSON",{
    virtuals: true,
    versionKey: false,
    transform: function(doc, ret){
        delete ret._id;
       
    }
})


export const  User = mongoose.model("User",userSchema)