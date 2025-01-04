const env = require("dotenv");
env.config({ path: "./.env" });

const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const http = require("http");

const { User, Product, Staff } = require("./model");

const saltRounds = 10;
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection failed:", err));

// User Registration
app.post("/register", async (req, res) => {
  const { id, username, password, base64Stringimage } = req.body;

  try {
    const existingUser = await User.findOne({ id });
    if (existingUser) {
      return res.status(202).json({ message: "User already exists" });
    }

    bcrypt.hash(password, saltRounds, async (err, hash) => {
      if (err) {
        return res.status(401).json({ message: "Error hashing password" });
      }

      const newUser = new User({ id, username, password: hash, base64Stringimage });
      await newUser.save();
      return res.status(201).json({ message: "User registered successfully" });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// User Login
app.post("/login", async (req, res) => {
  const { id, password } = req.body;

  try {
    const user = await User.findOne({ id });
    if (!user) {
      return res.status(202).json({ message: "Invalid username or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      return res.status(200).json({ message: "Login successful", base64Stringimage: user.base64Stringimage });
    } else {
      return res.status(202).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Add Product
app.post("/add-product", async (req, res) => {
  const { name, description, category, stockLevel, reorderPoint } = req.body;

  try {
    const newProduct = new Product({ name, description, category, stockLevel, reorderPoint });
    await newProduct.save();
    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Add Staff
app.post("/add-staff", async (req, res) => {
  const { staffId, name, position, contact, email, assignedTasks } = req.body;

  try {
    const newStaff = new Staff({ staffId, name, position, contact, email, assignedTasks });
    await newStaff.save();
    res.status(201).json({ message: "Staff added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Update Stock
app.post("/update-stock", async (req, res) => {
  const { productId, quantity, status } = req.body;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.stockLevel += quantity;
    product.orderStatus = status || "Delivered";
    await product.save();

    res.status(200).json({ message: "Stock updated successfully", product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Serve React Frontend
app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

// Start Server
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
