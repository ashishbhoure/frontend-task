import React from 'react';
import './ProductSelector.css';

const ProductSelector = ({ count }) => {
  return (
    <div className="product-selector">
      {[...Array(count)].map((_, index) => (
        <div key={index} className="product-option">
          <label>Size</label>
          <select>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
          <label>Colour</label>
          <select>
            <option value="Black">Black</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
          </select>
        </div>
      ))}
    </div>
  );
};

export default ProductSelector;
