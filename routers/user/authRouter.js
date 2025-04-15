import express from 'express';
import {  loginUser, logoutUser } from '../../controllers/user/authController.js';


// init router 
const router = express.Router();


// brand router 
router.post("/login/", loginUser)
      .post("/logout/",logoutUser)


export default router;