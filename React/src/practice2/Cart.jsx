import React from "react";

function Cart() {
  const cartItems = [
    "Laptop",
    "Smartphone",
    "Tablet",
    "power bank",
    "Smartwatch",
  ];
  return (
    <div>
      <h1>cart items</h1>
      {cartItems.length > 0 && (
        <h2>You have {cartItems.length} items in your cart</h2>
      )}

      {cartItems.map((item, index) => (
        <div key={index}>
          <h4>{item}</h4>
        </div>
      ))}
    </div>
  );
}

export default Cart;
