import React from 'react';

const Hero = ({ backgroundImage }) => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="text-white text-center">
        <h1 className="text-7xl font-bold mb-4 text-yellow-300">Welcome to our Burger Store</h1>
        <p className="text-4xl text-yellow-100">Discover Our Most Liked and Delecious Burgers</p>
      </div>
    </div>
  );
};

export default Hero;
