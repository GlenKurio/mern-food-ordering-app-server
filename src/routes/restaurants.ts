import express from "express";
import multer from "multer";
import restaurantsContoller from "../controllers/restaurants";
import { validateMyRestaurantRequest } from "../middleware/validation";
import { jwtCheck, jwtParse } from "../middleware/auth";
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } });

router.get("/", jwtCheck, jwtParse, restaurantsContoller.getRestaurant);

router.post(
  "/",
  upload.single("imageFile"),
  validateMyRestaurantRequest,
  jwtCheck,
  jwtParse,
  restaurantsContoller.createRestaurant
);

router.put(
  "/",
  upload.single("imageFile"),
  validateMyRestaurantRequest,
  jwtCheck,
  jwtParse,
  restaurantsContoller.updateRestaurant
);

export default router;
