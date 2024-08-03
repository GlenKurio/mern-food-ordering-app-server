import express from "express";
import { param } from "express-validator";
import RestaurantController from "../controllers/restaurant-search";
const router = express.Router();

router.get(
  "/:restaurantId",
  param("restaurantId")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("RestaurantID must be a string"),
  RestaurantController.getRestaurant
);
router.get(
  "/search/:city",
  param("city")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("City must be a string"),
  RestaurantController.searchRestaurant
);

export default router;
