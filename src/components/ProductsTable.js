import React from 'react';
import Product from './Product';

const ProductsList = ({ products, display }) => {
  console.log(products);
  return (
    <table style={{ display }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>In Stock</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <Product key={p.id} product={p} />
        ))}
      </tbody>
    </table>
  );
};

export default ProductsList;
