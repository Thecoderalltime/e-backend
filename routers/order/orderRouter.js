import express from 'express';
import { createOrderController, deleteOrderController, fetchAllOderController, fetchUserOrder,  updateOrderController } from '../../controllers/order/orderController.js';





// init router 
const router = express.Router();



// brand router 
router.post("/", createOrderController)
      .get("/:id", fetchUserOrder)
      .get("/", fetchAllOderController)
      .patch("/:id", updateOrderController)
      .delete("/:id", deleteOrderController)


export default router;