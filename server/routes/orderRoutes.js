import express from "express";
import {
  createOrder,
  getMyOrders,
  getAllOrders,
  markAsDelivered,
} from "../controllers/orderController.js";

import { protect } from "../middleware/authMiddleware.js";
import { admin } from "../middleware/adminMiddleware.js";

const router = express.Router();

// Create Order
router.post("/", protect, createOrder);

// Get My Orders
router.get("/myorders", protect, getMyOrders);

// Admin – Get All Orders
router.get("/", protect, admin, getAllOrders);

// Admin – Mark Delivered
router.put("/:id/deliver", protect, admin, markAsDelivered);

export default router;
