import React, { useState, useImperativeHandle } from 'react';

const Togglable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? 'none' : '' };
  const showWhenVisible = { display: visible ? '' : 'none' };

  const toggleVisibility = () => setVisible(!visible);

  useImperativeHandle(ref, () => {
    return { toggleVisibility };
  });

  return (
    <div>
      <button onClick={toggleVisibility} style={hideWhenVisible}>
        {props.buttonName}
      </button>
      <div style={showWhenVisible}>
        {props.children} <button onClick={toggleVisibility}>Close</button>
      </div>
    </div>
  );
});

Togglable.displayName = 'Togglable';

export default Togglable;
