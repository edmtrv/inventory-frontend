import React, { useEffect, useState, useRef } from 'react';
import Togglable from './Togglable';
import CategoryForm from './CategoryForm';
import CategoryList from './CategoryList';
import LoginForm from './LoginForm';
import Notification from './Notification';
import categoryService from '../services/categories';
import productService from '../services/products';
import loginService from '../services/login';

const App = () => {
  const [categories, setCategories] = useState([]);
  const [user, setUser] = useState(null);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const loadCategories = async () => {
      const result = await categoryService.getAll();
      setCategories(result.data.categories);
    };

    loadCategories();
  }, []);

  const categoryFormRef = useRef();

  const handleLogin = async (loginData) => {
    try {
      const user = await loginService.login(loginData);
      window.localStorage.setItem('loggedInUser', JSON.stringify(user));
      categoryService.setToken(user.token);
      productService.setToken(user.token);
      setUser(user);

      showNotification(`${user.username} successfully logged in`, 'success');
    } catch (err) {
      showNotification(err.message, 'error');
    }
  };

  const handleAddCategory = async (categoryData) => {
    try {
      categoryFormRef.current.toggleVisibility();
      const result = await categoryService.create(categoryData);

      setCategories(categories.concat(result.data.category));
      showNotification('Category added successfully', 'success');
    } catch (err) {
      showNotification(err.message, 'error');
    }
  };

  const handleRemoveCategory = async (categoryId) => {
    try {
      await categoryService.remove(categoryId);
      setCategories(categories.filter((cat) => cat.id !== categoryId));
      showNotification('Category removed successfully');
    } catch (err) {
      showNotification(err.message, 'error');
    }
  };

  const showNotification = (message, type) => {
    setNotification({ message, type });

    setTimeout(() => setNotification(null), 5000);
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
        {notification && <Notification {...notification} />}
        <h1>Inventory App</h1>
        <Togglable buttonName="Add Category" ref={categoryFormRef}>
          <CategoryForm addCategory={handleAddCategory} />
        </Togglable>
        <CategoryList
          categories={categories}
          removeCategory={handleRemoveCategory}
        />
      </div>
    );
  }
};

export default App;
