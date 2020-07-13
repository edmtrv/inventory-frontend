import React from 'react';
import Togglable from './Togglable';
import CategoryForm from './CategoryForm';
// import categoryService from '../services/categories';

const App = () => {
  const handleAddCategory = (categoryName) => {
    console.log('category added:', categoryName);
  };

  return (
    <div>
      <h1>Inventory App</h1>
      <Togglable buttonName="Add Category">
        <CategoryForm addCategory={handleAddCategory} />
      </Togglable>
    </div>
  );
};

export default App;
