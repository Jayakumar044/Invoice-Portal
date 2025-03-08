import React from "react";
import styles from "./InvoiceGuide.module.css";

const InvoiceGuide = () => {
  return (
    <div className={styles.guide} id="InvoiceGuide">
      <h2>Invoice Guide</h2>
      <div className={styles.content}>
        <h3>How to Use the Invoice Generator</h3>
        <p>
          1. Enter the <strong>Store Name</strong>, <strong>Order ID</strong>, and <strong>Order Date</strong>.
        </p>
        <p>
          2. Add items with their details:
          <ol>
            <li><strong>Item Name</strong>: Name of the item.</li>
            <li><strong>Quantity</strong>: Number of items.</li>
            <li><strong>Regular Price</strong>: Original price of the item.</li>
            <li><strong>Deal Price</strong>: Discounted price of the item.</li>
            <li><strong>Tax Rate</strong>: GST or tax percentage.</li>
          </ol>
        </p>
        <p>
          3. Click <strong>Add Item</strong> to add the item to the invoice.
        </p>
        <p>
          4. Review the invoice table:
          <ol>
            <li><strong>Total Without GST</strong>: Sum of all item totals without tax.</li>
            <li><strong>Total With GST</strong>: Sum of all item totals including tax.</li>
          </ol>
        </p>
        <p>
          5. Use the <strong>Update</strong> button to increase the quantity of an item.
        </p>
        <p>
          6. Use the <strong>Delete</strong> button to remove an item from the invoice.
        </p>
        <h3>Calculation Formula</h3>
        <p>
          - <strong>Item Total</strong> = Quantity × Deal Price<br />
          - <strong>Tax Amount</strong> = (Item Total × Tax Rate) / 100<br />
          - <strong>Total Without GST</strong> = Sum of all Item Totals<br />
          - <strong>Total With GST</strong> = Sum of all Item Totals + Sum of all Tax Amounts
        </p>
      </div>
    </div>
  );
};

export default InvoiceGuide;