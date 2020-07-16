import React, { useState } from 'react';

const CategoryForm = ({ addCategory }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const onAddCategory = (e) => {
    e.preventDefault();

    addCategory({ name, description });

    setName('');
    setDescription('');
  };

  return (
    <div>
      <h2>Add Category</h2>
      <form onSubmit={onAddCategory}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="category"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="category"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button>Add</button>
      </form>
    </div>
  );
};

export default CategoryForm;
