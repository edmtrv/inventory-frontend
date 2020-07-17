import React from 'react';

const Product = ({ product }) => {
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.number_in_stock}</td>
      <td>{product.description}</td>
    </tr>
  );
};

export default Product;
