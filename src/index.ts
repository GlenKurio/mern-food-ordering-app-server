import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./utils/db-connect";
import usersRoutes from "./routes/users";
import restaurantsRoutes from "./routes/restaurants";
import { v2 as cloudinary } from "cloudinary";
import restaurantSearchRoutes from "./routes/restaurantSearch";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/restaurants", restaurantsRoutes);
app.use("/api/v1/restaurant", restaurantSearchRoutes);
app.get("/health", (req: Request, res: Response) => {
  res.send({ message: "health OK!" });
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI!);
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
