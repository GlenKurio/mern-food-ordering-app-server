import express from "express";
import { jwtCheck, jwtParse } from "../middleware/auth";
import OrderController from "../controllers/order";
const router = express.Router();

router.post(
  "/checkout/create-checlout-session",
  jwtCheck,
  jwtParse,
  OrderController.createCheckoutSession
);

export default router;
