import React, { useState, useContext } from "react";
import styles from "./Generator.module.css";
import { ThemeContext } from "../../theme";

const Generator = () => {
  const { theme } = useContext(ThemeContext);
  const [items, setItems] = useState([
    // Predefined data
    {
      id: 1,
      storeName: "Store A",
      orderId: "1001",
      orderDate: "2023-10-01",
      itemName: "Item 1",
      quantity: 2,
      regularPrice: 50,
      dealPrice: 40,
      taxRate: 10,
    },
    {
      id: 2,
      storeName: "Store B",
      orderId: "1002",
      orderDate: "2023-10-02",
      itemName: "Item 2",
      quantity: 3,
      regularPrice: 30,
      dealPrice: 25,
      taxRate: 5,
    },
  ]);
  const [formData, setFormData] = useState({
    storeName: "",
    orderId: "",
    orderDate: "",
    itemName: "",
    quantity: "",
    regularPrice: "",
    dealPrice: "",
    taxRate: "",
  });
  const [editingItemId, setEditingItemId] = useState(null);
  const [message, setMessage] = useState(""); // For success/error messages

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    // Check if all fields are filled
    for (const key in formData) {
      if (!formData[key]) {
        setMessage("Please fill all the fields.");
        return false;
      }
    }
    return true;
  };

  const handleAddItem = () => {
    if (!validateForm()) return; // Stop if validation fails

    if (editingItemId) {
      // Update existing item
      setItems(
        items.map((item) =>
          item.id === editingItemId ? { ...item, ...formData } : item
        )
      );
      setEditingItemId(null);
      setMessage("Updated successfully.");
    } else {
      // Add new item
      const newItem = {
        id: Date.now(),
        ...formData,
      };
      setItems([...items, newItem]);
      setMessage("Added successfully.");
    }
    // Clear the form
    setFormData({
      storeName: "",
      orderId: "",
      orderDate: "",
      itemName: "",
      quantity: "",
      regularPrice: "",
      dealPrice: "",
      taxRate: "",
    });
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
    setMessage("Item deleted successfully.");
  };

  const handleEditItem = (item) => {
    setFormData({ ...item });
    setEditingItemId(item.id);
    setMessage(""); // Clear any previous messages
  };

  const calculateItemTotal = (item) => {
    const itemTotal = item.quantity * item.dealPrice;
    const tax = (itemTotal * item.taxRate) / 100;
    return {
      withoutGST: itemTotal,
      withGST: itemTotal + tax,
    };
  };

  const calculateTotal = (includeTax) => {
    return items.reduce((total, item) => {
      const itemTotal = item.quantity * item.dealPrice;
      const tax = (itemTotal * item.taxRate) / 100;
      return total + itemTotal + (includeTax ? tax : 0);
    }, 0);
  };

  return (
    <div className={`${styles.generator} ${theme === "dark" ? styles.dark : ""}`} id="Generator">
      <h2>Invoice Generator</h2>
      <div className={styles.form}>
        <input
          type="text"
          name="storeName"
          placeholder="Store Name"
          value={formData.storeName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="orderId"
          placeholder="Order ID"
          value={formData.orderId}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="orderDate"
          value={formData.orderDate}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="itemName"
          placeholder="Item Name"
          value={formData.itemName}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="regularPrice"
          placeholder="Regular Price"
          value={formData.regularPrice}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="dealPrice"
          placeholder="Deal Price"
          value={formData.dealPrice}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="taxRate"
          placeholder="Tax Rate (%)"
          value={formData.taxRate}
          onChange={handleInputChange}
        />
        <button onClick={handleAddItem}>
          {editingItemId ? "Update Item" : "Add Item"}
        </button>
      </div>
      {message && <p className={styles.message}>{message}</p>}
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Store Name</th>
              <th>Order ID</th>
              <th>Date</th>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Regular Price</th>
              <th>Deal Price</th>
              <th>Without GST</th>
              <th>With GST</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              const { withoutGST, withGST } = calculateItemTotal(item);
              return (
                <tr key={item.id}>
                  <td>{item.storeName}</td>
                  <td>{item.orderId}</td>
                  <td>{item.orderDate}</td>
                  <td>{item.itemName}</td>
                  <td>{item.quantity}</td>
                  <td>₹{item.regularPrice}</td>
                  <td>₹{item.dealPrice}</td>
                  <td>₹{withoutGST.toFixed(2)}</td>
                  <td>₹{withGST.toFixed(2)}</td>
                  <td>
                    <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
                    <button onClick={() => handleEditItem(item)}>Edit</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className={styles.totals}>
        <p><span className={styles.without}>Total Without GST:</span> ₹{calculateTotal(false).toFixed(2)}</p>
        <p><span className={styles.without}>Total With GST:</span> ₹{calculateTotal(true).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Generator;