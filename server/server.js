const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");
const designRoutes = require("./routes/designRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const messageRoutes = require("./routes/messageRoutes");
const blogRoutes = require("./routes/blogRoutes");
const testimonialRoutes = require("./routes/testimonialRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();

const app = express();
const isProduction = process.env.NODE_ENV === "production";
const allowedOrigins = (process.env.CLIENT_URL || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);
const localDevOriginPattern = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/;
const databaseStatus = {
  connected: false,
  message: "MongoDB connection has not started yet.",
};

const isAllowedOrigin = (origin) => {
  if (!origin || allowedOrigins.includes(origin)) return true;
  return !isProduction && localDevOriginPattern.test(origin);
};

app.use(
  cors({
    origin(origin, callback) {
      if (isAllowedOrigin(origin)) return callback(null, true);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  }),
);
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    success: true,
    name: "Qubnova Technologies API",
    tagline: "Smart Software, AI Tools & Digital Solutions",
    founder: "Moaz Saeed",
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    database: databaseStatus,
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/designs", designRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/chat", chatRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  app.listen(PORT, () => console.log(`Qubnova API running on port ${PORT}`));

  try {
    const connection = await connectDB();
    databaseStatus.connected = true;
    databaseStatus.message = `MongoDB connected: ${connection.connection.host}`;
  } catch (error) {
    databaseStatus.connected = false;
    databaseStatus.message = error.message;
    console.warn(
      "MongoDB connection failed. API is still running; database-backed routes may fail until MongoDB is available.",
    );
    console.warn(error.message);
  }
};

if (require.main === module) {
  startServer();
}

module.exports = app;
