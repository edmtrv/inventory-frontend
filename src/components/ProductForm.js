import React, { useState } from 'react';

const ProductForm = ({ addProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [inStock, setInStock] = useState('');
  const [description, setDescription] = useState('');

  const onAddProduct = (e) => {
    e.preventDefault();

    addProduct({ name, price, description, number_in_stock: inStock });

    setName('');
    setPrice('');
    setInStock('');
    setDescription('');
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <form onSubmit={onAddProduct}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
          />
        </div>
        <div>
          <label htmlFor="name">Price</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            id="name"
          />
        </div>
        <div>
          <label htmlFor="number_in_stock">In Stock</label>
          <input
            type="number"
            value={inStock}
            onChange={(e) => setInStock(e.target.value)}
            id="number_in_stock"
          />
        </div>
        <div>
          <label htmlFor="name">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="name"
          />
        </div>
        <button>Add</button>
      </form>
    </div>
  );
};

export default ProductForm;
