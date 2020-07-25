import React from 'react';
import Product from './Product';
import Togglable from './Togglable';
import ProductForm from './ProductForm';

const ProductTable = ({ products, addProduct, display, removeProduct }) => {
  if (products.length > 0) {
    return (
      <div style={{ display }}>
        <table>
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
              <Product key={p.id} product={p} removeProduct={removeProduct} />
            ))}
          </tbody>
        </table>
        <Togglable buttonName="Add Product">
          <ProductForm addProduct={addProduct} />
        </Togglable>
      </div>
    );
  } else {
    return (
      <div style={{ display }}>
        No Products
        <Togglable buttonName="Add Product">
          <ProductForm addProduct={addProduct} />
        </Togglable>
      </div>
    );
  }
};

export default ProductTable;
