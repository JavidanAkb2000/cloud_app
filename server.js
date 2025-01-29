const connectDB = require("./db"); // Ensure correct import
connectDB(); // Connect to MongoDB

const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes"); // ✅ Import User Routes

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Register User Routes
app.use("/users", userRoutes);  // << THIS WAS MISSING!

app.get("/", (req, res) => {
    res.send("Cloud App API is running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🔥 Server running on port ${PORT}`);
});
