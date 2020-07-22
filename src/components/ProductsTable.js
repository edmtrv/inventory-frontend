import React from 'react';
import Product from './Product';

const ProductsTable = ({ products, display }) => {
  if (products.length > 0) {
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
  } else {
    return <div style={{ display }}>No Products</div>;
  }
};

export default ProductsTable;
