import express from 'express';
import { createUser, deleteUserById, fetchAllUser, fetchUserById, updateUserById } from '../../controllers/user/userController.js';




// init router 
const router = express.Router();



// brand router 
router.post("/", createUser)
      .get("/", fetchAllUser)
      .get("/:id", fetchUserById)
      .patch("/:id", updateUserById)
      .delete("/:id", deleteUserById)


export default router;