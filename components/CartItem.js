import React from 'react';

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="d-flex justify-content-between align-items-center border-bottom py-2">
      <div>
        <h4>{item.name}</h4>
        <p>Price: ${item.price}</p>
      </div>
      <button className="btn btn-danger" onClick={onRemove}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
