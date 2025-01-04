// import { useState } from "react";
// import "./products.css";

// function Products() {
//   const [products, setProducts] = useState([
//     { name: "Cisco ISR 1101", price: 500, qty: 500, amount: 250000 },
//     { name: "HP 5406zl", price: 300, qty: 300, amount: 90000 },
//     { name: "DOCSIS 3.1 Cable Modem", price: 200, qty: 200, amount: 40000 },
//   ]);
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [qty, setQty] = useState("");
//   const [total, setTotal] = useState(750000); // Initial total

//   const handleAddProduct = () => {
//     if (name && price && qty) {
//       const newProduct = {
//         name,
//         price: parseFloat(price),
//         qty: parseInt(qty),
//         amount: parseFloat(price) * parseInt(qty),
//       };

//       setProducts([...products, newProduct]);
//       setTotal(total + newProduct.amount);

//       // Clear input fields
//       setName("");
//       setPrice("");
//       setQty("");
//     }
//   };

//   const handleRefresh = () => {
//     setProducts([]);
//     setTotal(0);
//   };

//   return (
//     <div className="products-container">
//       <h2>Staff Product Management</h2>
//       <div className="form-section">
//         <h3>Perform Stock Transactions</h3>
//         <div className="input-group">
//           <label>Product Name</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Enter product name"
//           />
//         </div>
//         <div className="input-group">
//           <label>Price</label>
//           <input
//             type="number"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             placeholder="Enter price"
//           />
//         </div>
//         <div className="input-group">
//           <label>Quantity</label>
//           <input
//             type="number"
//             value={qty}
//             onChange={(e) => setQty(e.target.value)}
//             placeholder="Enter quantity"
//           />
//         </div>
//         <button className="btn btn-add" onClick={handleAddProduct}>
//           Add Stock
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Products;
