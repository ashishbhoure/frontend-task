import React from 'react';
import './AddToCartButton.css';

const AddToCartButton = () => {
  return <>
  <div className='total' >
    <p className='free-delivery' >Free Delivery</p>
    <p className='total-price'>
        Total : <spna>$18.00</spna> USD
    </p>
  </div>
    <button className="add-to-cart">+ Add to Cart</button>
    <p className='tag-line' >@ Powered by Pumper</p>
  </>;
};

export default AddToCartButton;
