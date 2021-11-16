// Exports
import express from "express";
import router from "./routes/routes";
import dotenv from "dotenv";

// Dotenv config
dotenv.config();

const app = express();
app.use(express.json());
app.use(router);

app.listen(process.env.PORT || 3000, () =>
  console.log(`App is running on port : ${process.env.PORT || 3000}`)
);
