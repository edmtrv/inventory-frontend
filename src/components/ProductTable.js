import React from 'react';
import Product from './Product';
import Togglable from './Togglable';
import ProductForm from './ProductForm';

const ProductTable = ({
  products,
  addProduct,
  display,
  removeProduct,
  productFormRef,
}) => {
  const productDiv = (
    <Togglable buttonName="Add Product" ref={productFormRef}>
      <ProductForm addProduct={addProduct} />
    </Togglable>
  );

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
        {productDiv}
      </div>
    );
  } else {
    return (
      <div style={{ display }}>
        No Products
        {productDiv}
      </div>
    );
  }
};

export default ProductTable;
