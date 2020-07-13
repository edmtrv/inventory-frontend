import React, { useState } from 'react';

const CategoryForm = ({ addCategory }) => {
  const [cateogry, setCategory] = useState('');

  const onAddCategory = (e) => {
    e.preventDefault();

    addCategory(cateogry);

    setCategory('');
  };

  return (
    <div>
      <form onSubmit={onAddCategory}>
        <label htmlFor="category">Category</label>
        <input
          id="category"
          value={cateogry}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default CategoryForm;
