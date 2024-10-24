// CustomOption.jsx
import React from 'react';
import './CustomOption.css';

const CustomOption = ({ label, onClick }) => {
  return (
    <div
      className="custom-option"
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default CustomOption;
