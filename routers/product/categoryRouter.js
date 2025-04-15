import express from 'express';
import { categoryController } from '../../controllers/product/categoryController.js';


// init router 
const router = express.Router();


// brand router 
router.get("/", categoryController)


export default router;