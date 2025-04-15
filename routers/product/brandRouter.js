import express from 'express';
import { brandController } from '../../controllers/product/brandController.js';




// init router 
const router = express.Router();



// brand router 
router.get("/", brandController)


export default router;