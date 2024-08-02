import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./utils/db-connect";
import usersRoutes from "./routes/users";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/users", usersRoutes);

app.get("/health", (req: Request, res: Response) => {
  res.send({ message: "health OK!" });
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI!);
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
