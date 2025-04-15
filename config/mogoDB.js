import mongoose from "mongoose";



const mongoDBconnect = () => {
  try {
      mongoose.connect(`mongodb://localhost:27017/e-shop`);
    console.log("MongoDB Connected".green);
  } catch (error) {
    console.log("MongoDB Not Connected".red);
  }
};

export default mongoDBconnect;
