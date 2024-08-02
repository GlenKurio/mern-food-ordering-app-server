import express from "express";
import usersContoller from "../controllers/users";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateUserRequest } from "../middleware/validation";

const router = express.Router();

router.get("/", jwtCheck, jwtParse, usersContoller.getUser);
router.post("/", jwtCheck, usersContoller.createUser);
router.put(
  "/",
  jwtCheck,
  jwtParse,
  validateUserRequest,
  usersContoller.updateUser
);

export default router;
