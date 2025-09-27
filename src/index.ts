import express from "express";
import { ENV } from "./config/env";
import healthRoute from "./routes/health";
import morgan from "morgan";

const app = express();

app.use(express.json());
if (ENV.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

// Routes
app.use("/", healthRoute);

// Start server
app.listen(ENV.PORT, () => {
  console.log(`🚀 Server running on http://localhost:${ENV.PORT}`);
});
