import React from 'react';
import Category from './Category';

const CategoriesList = ({ categories }) => {
  return (
    <div>
      <h2>Categories</h2>
      {categories.map((cat) => (
        <Category key={cat.id} category={cat} />
      ))}
    </div>
  );
};

export default CategoriesList;
