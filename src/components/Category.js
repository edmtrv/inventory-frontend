import React, { useState } from 'react';
import ProductTable from './ProductTable';
import productService from '../services/products';

const Category = ({ category }) => {
  const [visible, setVisible] = useState(false);
  const [products, setProducts] = useState(category.products);

  const handleAddProduct = async (productData) => {
    try {
      const result = await productService.create({
        ...productData,
        category: category.id,
      });
      setProducts(products.concat(result.data.product));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h4>{category.name}</h4>
      <p>{category.description}</p>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Hide Products' : 'Show Products'}
      </button>
      <ProductTable
        display={visible ? 'block' : 'none'}
        products={products}
        addProduct={handleAddProduct}
      />
    </div>
  );
};

export default Category;
