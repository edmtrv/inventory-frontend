import React, { useState, useRef } from 'react';
import ProductTable from './ProductTable';
import Notification from './Notification';
import productService from '../services/products';

const Category = ({ category, removeCategory }) => {
  const [visible, setVisible] = useState(false);
  const [products, setProducts] = useState(category.products);
  const [notification, setNotification] = useState(null);

  const productFormRef = useRef();
  const confirmRemove = () => {
    if (window.confirm(`Delete category: ${category.name}`)) {
      removeCategory(category.id);
    }
  };

  const handleAddProduct = async (productData) => {
    try {
      productFormRef.current.toggleVisibility();
      const result = await productService.create({
        ...productData,
        category: category.id,
      });
      showNotification('Product successfully added', 'success');
      setProducts(products.concat(result.data.product));
    } catch (err) {
      showNotification(err.message, 'error');
    }
  };

  const handleRemoveProduct = async (productId) => {
    try {
      await productService.remove(productId);
      showNotification('Product successfully removed', 'success');
      setProducts(products.filter((p) => p.id !== productId));
    } catch (err) {
      showNotification(err.message, 'error');
    }
  };

  const showNotification = (message, type) => {
    setNotification({ message, type });

    setTimeout(() => setNotification(null), 5000);
  };

  return (
    <div>
      {notification && <Notification {...notification} />}
      <h4>{category.name}</h4>
      <p>{category.description}</p>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Hide Products' : 'Show Products'}
      </button>
      <ProductTable
        display={visible ? 'block' : 'none'}
        products={products}
        addProduct={handleAddProduct}
        removeProduct={handleRemoveProduct}
        productFormRef={productFormRef}
      />
      <button onClick={confirmRemove}>Delete Category</button>
    </div>
  );
};

export default Category;
