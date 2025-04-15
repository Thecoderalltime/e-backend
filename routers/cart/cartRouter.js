import express from 'express';
import { createCartItem, deleteCartByUserId, fetchCartByUserId, updateCartByUserId } from '../../controllers/product/cartController.js';




// init router 
const router = express.Router();



// brand router 
router.post("/", createCartItem)
      .get("/", fetchCartByUserId)
      .patch("/:id", updateCartByUserId)
      .delete("/:id", deleteCartByUserId)


export default router;