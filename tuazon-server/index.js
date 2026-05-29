require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
// const articleRoutes = require("./routes/articleRoutes");

const app = express();

// Database Connection
connectDB();

// CORS options
const corsOptions = {
  origin: "*",
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.options(/.*/, cors(corsOptions));

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api/users", userRoutes);
// app.use("/api/articles", articleRoutes);

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server Error" });
});

// Only listen locally — Vercel handles this in production
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
