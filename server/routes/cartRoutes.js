import express from "express";
import {
  addToCart,
  getCartItems,
  removeFromCart
} from "../controllers/cartController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, addToCart).get(protect, getCartItems);
router.route("/:id").delete(protect, removeFromCart);

export default router;
