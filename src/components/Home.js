import React from 'react';
import Header from './Header/Header';
import OfferCard from './OfferCard/OfferCard';
import AddToCartButton from './AddToCartButton/AddToCartButton';
import '../App.css';

const Home = () => {
  const offers = [
    { units: 1, discount: '10%', price: 10, originalPrice: 12, mostPopular: false },
    { units: 2, discount: '20%', price: 18, originalPrice: 24, mostPopular: true },
    { units: 3, discount: '30%', price: 24, originalPrice: 36, mostPopular: false },
  ];

  return (
    <div className="home-page-container">
      <Header />
      {offers.map((offer, index) => (
        <OfferCard key={index} offer={offer} />
      ))}
      <AddToCartButton />
    </div>
  );
};

export default Home;
