import React from 'react';

const Notification = ({ message, type }) => {
  const color = type === 'success' ? 'green' : 'red';
  return <h2 style={{ color }}>{message}</h2>;
};

export default Notification;
