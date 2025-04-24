import { User } from "../../model/userModel.js"


export const createUser = async (req, res) => {
    try {
        const password = req.body.password;
        const email = req.body.email;

        
        
        const newUser = new User({email,password});
        const doc = await newUser.save();
        res.status(201).json(doc);
    } catch (error) {
        res.status(400).json({ message: error });
    }
};


export const fetchAllUser = async (req, res) => {
    try {
        const newUser = await User.find({}).exec()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(400).json({ message: error })
    }

}

export const fetchUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId).exec();
        res.status(200).json(user)

    } catch (error) {
        res.status(400).json(error.message)

    }
}

// it's work user updata and delete user address array of object 
export const updateUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const userData = req.body
        const user = await User.findByIdAndUpdate(userId, userData, { new: true }).exec();
        if (!user) {
            res.status(404).json({ message: "User not found" })
        }
        res.status(200).json(user)

    } catch (error) {
        res.status(400).json({ message: error.message })

    }

}

// this controller not use in fontend 
export const deleteUserById = async (req, res) => {
    try {
        const userId = req.params.id;
         await User.findByIdAndDelete(userId);
        res.status(200).json({message:"address delete successfully"})

    } catch (error) {
        res.status(400).json({ message: error.message })

    }

}