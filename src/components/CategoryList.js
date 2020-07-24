import React from 'react';
import Category from './Category';

const CategoryList = ({ categories, addProduct }) => {
  return (
    <div>
      <h2>Categories</h2>
      <div>
        {categories.map((cat) => (
          <Category key={cat.id} category={cat} addProduct={addProduct} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
