import React, { useState } from 'react';
import './Dashboard.css';
import products from './products.js'

const productDataa = [
    {
      ProductName: 'Cisco ISR 1101',
      LastUpdated: '2025-01-01',
      AvailableProducts: 500,
      UpdatedProducts: 680,
    },
    {
      ProductName: 'ProSwitch 48',
      LastUpdated: '2025-01-03',
      AvailableProducts: 400,
      UpdatedProducts: 490,
    },
    {
      ProductName: 'FiberSplit-8X',
      LastUpdated: '2024-12-28',
      AvailableProducts: 300,
      UpdatedProducts: 380,
    },
    {
      ProductName: 'NetCom 1200',
      LastUpdated: '2024-12-30',
      AvailableProducts: 600,
      UpdatedProducts: 680,
    },
    {
      ProductName: 'ASUS RT-AX88U',
      LastUpdated: '2025-01-02',
      AvailableProducts: 150,
      UpdatedProducts: 240,
    },
  ];

const productData = [
    {
      ProductName: 'Cisco ISR 1101',
      Description: 'ISR 1101 4 Ports GE Ethernet WAN Router',
      ProductCategoryName: 'Router',
      ModelNumber: 'XYZ123',
      SerialNumber: '6a38028c-6a71-4f44-b8f6-253bc7086a0a',
      StockLevel: 500,
      ReorderPoint: 150,
      SupplierName: 'Cisco',
      SupplierMail: 'abcd@mail.com',
      SupplierContact: '1234567890',
      OrderDate: '15-01-2023',
      Quantity: 500,
      OrderStatus: 'Delivered',
      DeliveredDate: '20-01-2023',  // Added Delivered Date
      ExpectedDeliveryDate: null,
    },
    {
      ProductName: 'ProSwitch 48',
      Description: '48-port managed switch',
      ProductCategoryName: 'Networking',
      ModelNumber: 'FS8X150',
      SerialNumber: '4c6db6ce-51d6-4e26-9ffa-23f810e562f9',
      StockLevel: 400,
      ReorderPoint: 75,
      SupplierName: 'NetGear Pro',
      SupplierMail: 'sales@netgearpro.com',
      SupplierContact: '9256476542',
      OrderDate: '30-01-2022',
      Quantity: 400,
      OrderStatus: 'Delivered',
      DeliveredDate: '05-02-2022',  // Added Delivered Date
      ExpectedDeliveryDate: null,
    },
    {
      ProductName: 'FiberSplit-8X',
      Description: 'Optical fiber splitter (1x8)',
      ProductCategoryName: 'Optical',
      ModelNumber: 'SM1000E',
      SerialNumber: '69497354-fd0a-4de7-a0a2-2879ad763cd6',
      StockLevel: 300,
      ReorderPoint: 50,
      SupplierName: 'OptiTech Co.',
      SupplierMail: 'info@optitech.com',
      SupplierContact: '8920332194',
      OrderDate: '12-02-2022',
      Quantity: 300,
      OrderStatus: 'Delivered',
      DeliveredDate: '18-02-2022',  // Added Delivered Date
      ExpectedDeliveryDate: null,
    },
    {
      ProductName: 'NetCom 1200',
      Description: 'High-speed 1Gb Ethernet adapter',
      ProductCategoryName: 'Networking',
      ModelNumber: 'NET1200G',
      SerialNumber: 'd91a82e7-d7f1-4f5b-87c9-b9ad6a8044b3',
      StockLevel: 600,
      ReorderPoint: 200,
      SupplierName: 'NetCom',
      SupplierMail: 'contact@netcom.com',
      SupplierContact: '9876543210',
      OrderDate: '22-03-2023',
      Quantity: 600,
      OrderStatus: 'Shipped',
      DeliveredDate: null,  // Not delivered yet
      ExpectedDeliveryDate: '22-01-2024',
    },
    {
      ProductName: 'ASUS RT-AX88U',
      Description: 'Wi-Fi 6 Gaming Router',
      ProductCategoryName: 'Router',
      ModelNumber: 'RTAX88U',
      SerialNumber: '1a32b7cd-ff4a-4e7d-8f6f-ef6a1c8a5b3b',
      StockLevel: 150,
      ReorderPoint: 50,
      SupplierName: 'ASUS',
      SupplierMail: 'support@asus.com',
      SupplierContact: '800-283-1387',
      OrderDate: '01-06-2023',
      Quantity: 150,
      OrderStatus: 'Delivered',
      DeliveredDate: '10-06-2023',  // Added Delivered Date
      ExpectedDeliveryDate: null,
    },
    {
        ProductName: 'ProSwitch 48',
        Description: '48-port managed switch',
        ProductCategoryName: 'Networking',
        ModelNumber: 'FS8X150',
        SerialNumber: '4c6db6ce-51d6-4e26-9ffa-23f810e562f9',
        StockLevel: 400,
        ReorderPoint: 75,
        SupplierName: 'NetGear Pro',
        SupplierMail: 'sales@netgearpro.com',
        SupplierContact: '9256476542',
        OrderDate: '30-01-2022',
        Quantity: 400,
        OrderStatus: 'Delivered',
        DeliveredDate: '05-02-2022',  // Added Delivered Date
        ExpectedDeliveryDate: null,
      },
      {
        ProductName: 'ProSwitch 48',
        Description: '48-port managed switch',
        ProductCategoryName: 'Networking',
        ModelNumber: 'FS8X150',
        SerialNumber: '4c6db6ce-51d6-4e26-9ffa-23f810e562f9',
        StockLevel: 400,
        ReorderPoint: 75,
        SupplierName: 'NetGear Pro',
        SupplierMail: 'sales@netgearpro.com',
        SupplierContact: '9256476542',
        OrderDate: '30-01-2022',
        Quantity: 400,
        OrderStatus: 'Delivered',
        DeliveredDate: '05-02-2022',  // Added Delivered Date
        ExpectedDeliveryDate: null,
      },
  ]; 
function Dashboard() {
  const [showMore, setShowMore] = useState(false);

  const toggleView = () => {
    setShowMore((prevState) => !prevState);
  };

  return (
    <div className="App">
      <header className="dashboard-header">
        <h1>Product Inventory Dashboard</h1>
        <p>Your complete product stock summary</p>
      </header>

      <div className="dashboard-content">
        <div className="stats-cards">
          <div className="card">
            <h3>Total Products</h3>
            <p>{productData.length}</p>
          </div>
          <div className="card">
            <h3>Low Stock</h3>
            <p>{productData.filter((product) => product.StockLevel <= product.ReorderPoint).length}</p>
          </div>
          <div className="card">
            <h3>Delivered Orders</h3>
            <p>{productData.filter((product) => product.OrderStatus === 'Delivered').length}</p>
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <button className="view-more-btn" onClick={toggleView}>
            {showMore ? 'View Less' : 'View More'}
          </button>
        </div>

        <div className="tables-container">
          {/* Product Table */}
          <table className="product-table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Description</th>
                <th>Category</th>
                <th>Stock Level</th>
                <th>Reorder Point</th>
                <th>Order Date</th>
                <th>Order Status</th>
                <th>Delivered Date</th>
              </tr>
            </thead>
            <tbody>
              {productData.slice(0, showMore ? productData.length : 5).map((product, index) => (
                <tr key={index}>
                  <td>{product.ProductName}</td>
                  <td>{product.Description}</td>
                  <td>{product.ProductCategoryName}</td>
                  <td>{product.StockLevel}</td>
                  <td>{product.ReorderPoint}</td>
                  <td>{product.OrderDate}</td>
                  <td>{product.OrderStatus}</td>
                  <td>{product.DeliveredDate ? product.DeliveredDate : 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Admin Updated Table */}
          <table className="updated-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Last Updated Date</th>
              <th>Available Products</th>
              <th>Updated Products</th>
            </tr>
          </thead>
          <tbody>
            {productDataa.map((product, index) => (
              <tr key={index}>
                <td>{product.ProductName}</td>
                <td>{product.LastUpdated}</td>
                <td>{product.AvailableProducts}</td>
                <td>{product.UpdatedProducts}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;


