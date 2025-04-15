import { User } from "../../model/userModel.js";

export const loginUser = async (req, res) => {
 
    try {
        const user =  await User.findOne({email:req.body.email})
        
        if (!user) {
            res.status(404).json({ message: "user email not found" })
        } else if (user.password === req.body.password) {
            res.status(200).json({id:user.id, email:user.email,address:user.address, role:user.role})
        } else {
            res.status(500).json({ message: "Invalid email and password" })
        }
    } catch (error) {
        res.status(400).json({ message: error })
    }

}


// not use in fortend 
export const logoutUser = async (req, res) => {
    try {
    res.status(200).json({ data:"User logged out successfully"})
       
    } catch (error) {
        res.status(400).json({ message: error })
    }

}
