import express from "express";
import dotenv from "dotenv";
import db from "./config/db.js";  
import schoolRoutes from "./routes/SchoolRoute.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/schools", schoolRoutes);

app.get("/", (_req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  db.ping((err) => {
    if (err) {
      console.error("Database ping failed:", err.message);
    } else {
      console.log("Database connection is alive.");
    }
  });

  console.log(`Server running on http://localhost:${PORT}`);
});
