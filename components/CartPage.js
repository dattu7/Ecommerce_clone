import React from 'react';
import { Link } from 'react-router-dom';

const CartPage = ({ cartItems, removeFromCart }) => {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="container mt-4">
      <div className="my-4">
        <Link to="/" className="btn btn-secondary">
          <span className="arrow-left"></span> &lt; Back to Products
        </Link>
      </div>
      <h1 className="display-4">Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="list-group">
            {cartItems.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="mb-0">{item.name}</h5>
                  <p className="mb-0">Price: ${item.price}</p>
                </div>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <h5>Total Price: ${getTotalPrice()}</h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
