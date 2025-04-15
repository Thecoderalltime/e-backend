import express from 'express';
import { createProductController, fetchProductById, fetchProductByIdAndUpdate, fetchProductController } from '../../controllers/product/productController.js';



// init router 
const router = express.Router();


// product router 
router.post("/", createProductController)
      .get("/", fetchProductController)
      .get("/:id",fetchProductById)
      .patch("/:id", fetchProductByIdAndUpdate)

export default router ;