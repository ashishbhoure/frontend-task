import React from 'react';
import ProductSelector from '../ProductSelector/ProductSelector';
import './OfferCard.css';

const OfferCard = ({ offer }) => {
  return (
    <div className={`offer-card ${offer.mostPopular ? 'most-popular' : ''}`}>
      <div className="offer-header">
        <input type="radio" name="offer" />
        <h2>{offer.units} Unit</h2>
        <span className="discount">{offer.discount} Off</span>
      </div>
      <p className="price">
        ${offer.price.toFixed(2)} USD <span className="original-price">${offer.originalPrice.toFixed(2)} USD</span>
      </p>
      {offer.units > 1 && <ProductSelector count={offer.units} />}
    </div>
  );
};

export default OfferCard;
