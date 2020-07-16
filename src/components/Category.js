import React, { useState } from 'react';
import ProductList from './ProductsList';

const Category = ({ category }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <h4>{category.name}</h4>
      <p>{category.description}</p>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Hide' : 'Show'}
      </button>
      <ProductList
        display={visible ? 'block' : 'none'}
        products={category.products}
      />
    </div>
  );
};

export default Category;
