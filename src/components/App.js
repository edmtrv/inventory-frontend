import React, { useEffect, useState } from 'react';
import Togglable from './Togglable';
import CategoryForm from './CategoryForm';
import CategoryList from './CategoryList';
import LoginForm from './LoginForm';
import categoryService from '../services/categories';
import productService from '../services/products';
import loginService from '../services/login';

const App = () => {
  const [categories, setCategories] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadCategories = async () => {
      const result = await categoryService.getAll();
      setCategories(result.data.categories);
    };

    loadCategories();
  }, []);

  const handleLogin = async (loginData) => {
    try {
      const user = await loginService.login(loginData);
      window.localStorage.setItem('loggedInUser', JSON.stringify(user));
      categoryService.setToken(user.token);
      productService.setToken(user.token);
      setUser(user);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddCategory = async (categoryData) => {
    try {
      const result = await categoryService.create(categoryData);

      setCategories(categories.concat(result.data.category));
    } catch (err) {
      console.log(err);
    }
  };

  const handleSelectCategory = (category) => {
    console.log(category);
  };

  if (user === null) {
    return (
      <div>
        <LoginForm userLogin={handleLogin} />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Inventory App</h1>
        <Togglable buttonName="Add Category">
          <CategoryForm addCategory={handleAddCategory} />
        </Togglable>
        <CategoryList
          categories={categories}
          selectCategory={handleSelectCategory}
        />
      </div>
    );
  }
};

export default App;
