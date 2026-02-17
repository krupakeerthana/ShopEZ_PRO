import Order from "../models/order.js";
import Cart from "../models/cart.js";

// Create Order
export const createOrder = async (req, res) => {
  try {
    const cartItems = await Cart.find({ user: req.user._id }).populate("product");

    if (cartItems.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const orderItems = cartItems.map((item) => ({
      product: item.product._id,
      name: item.product.name,
      image: item.product.image,
      price: item.product.price,
      quantity: item.quantity,
    }));

    const totalPrice = orderItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    const order = new Order({
      user: req.user._id,
      orderItems,
      totalPrice,
    });

    const createdOrder = await order.save();

    // Clear cart after order
    await Cart.deleteMany({ user: req.user._id });

    res.status(201).json(createdOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Checkout failed" });
  }
};

// Get My Orders
export const getMyOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
};

// Admin - Get All Orders
export const getAllOrders = async (req, res) => {
  const orders = await Order.find().populate("user", "name email");
  res.json(orders);
};

// Admin - Mark Delivered
export const markAsDelivered = async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.status = "Delivered";
    await order.save();
    res.json({ message: "Order marked as delivered" });
  } else {
    res.status(404).json({ message: "Order not found" });
  }
};
