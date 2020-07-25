import React from 'react';

const Product = ({ product, removeProduct }) => {
  const confirmRemove = () => {
    if (window.confirm(`Delete product: ${product.name}`)) {
      removeProduct(product.id);
    }
  };
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.number_in_stock}</td>
      <td>{product.description}</td>
      <td>
        <button onClick={confirmRemove}>Delte</button>
      </td>
    </tr>
  );
};

export default Product;
