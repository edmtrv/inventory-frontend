import React, { useEffect, useState } from 'react';
import Togglable from './Togglable';
import CategoryForm from './CategoryForm';
import CategoriesList from './CategoriesList';
import categoryService from '../services/categories';

const App = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      const result = await categoryService.getAll();
      setCategories(result.data.categories);
    };

    loadCategories();
  }, []);

  const handleAddCategory = (category) => {
    console.log('category added:', category);
    categoryService.create(category);
  };

  const handleSelectCategory = (category) => {
    console.log(category);
  };

  return (
    <div>
      <h1>Inventory App</h1>
      <Togglable buttonName="Add Category">
        <CategoryForm addCategory={handleAddCategory} />
      </Togglable>
      <CategoriesList
        categories={categories}
        selectCategory={handleSelectCategory}
      />
    </div>
  );
};

export default App;
