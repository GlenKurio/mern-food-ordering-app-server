import express from "express";
import multer from "multer";
import restaurantsContoller from "../controllers/restaurants";
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } });

router.post(
  "/",
  upload.single("imageFile"),
  restaurantsContoller.createRestaurant
);

export default router;
