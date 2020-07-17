import React, { useState } from 'react';
import ProductsTable from './ProductsTable';

const Category = ({ category }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <h4>{category.name}</h4>
      <p>{category.description}</p>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Hide' : 'Show'}
      </button>
      <ProductsTable
        display={visible ? 'block' : 'none'}
        products={category.products}
      />
    </div>
  );
};

export default Category;
