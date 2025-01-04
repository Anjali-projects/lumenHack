const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/inventory", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch(() => {
    console.log("MongoDB connection failed");
  });
const userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  base64Stringimage: { type: String, required: true },
});

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  category: { type: String, required: true },
  stockLevel: { type: Number, default: 0 },
  reorderPoint: { type: Number },
  orderStatus: { type: String, enum: ["Delivered", "Shipped"], default: "Shipped" },
});
const staffSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    price: { type: Number, required: true }, 
    quantity: { type: Number, required: true },
  }
);
const User = mongoose.model("User", userSchema);
const Product = mongoose.model("Product", productSchema);
const Staff = mongoose.model("Staff", staffSchema);

module.exports = { User, Product, Staff };