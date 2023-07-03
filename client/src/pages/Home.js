import React, { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Navigation from "../components/Navigation.js";
import Footer from "../components/Footer.js";
import Hero from "../components/Hero.js";
import Featured from "../components/Featured.js";
import Contactus from "../components/ContactUs.js";
import {
  productsArray,
  backgroundImageUrl,
  contactImageUrl,
} from "../constants/data.js";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === productsArray.length - 1) {
        return 0; // Wrap around to the first component
      } else {
        return prevIndex + 1;
      }
    });
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return productsArray.length - 1; // Wrap around to the last component
      } else {
        return prevIndex - 1;
      }
    });
  };

  return (
    <div className="bg-black">
      <Navigation />
      <Hero backgroundImage={backgroundImageUrl} />
      <br />
      <br />
      <br />
      <h1 className="text-7xl font-bold mb-4 text-yellow-300 text-center">
        Our Featured Products
      </h1>
      <div className="relative">
        <button
          className="bg-white absolute left-0 top-1/2 transform -translate-y-1/2"
          onClick={goToPrevious}
        >
          <MdChevronLeft className="bg-yellow-300 text-7xl" />
        </button>
        <button
          className="bg-white absolute right-0 top-1/2 transform -translate-y-1/2"
          onClick={goToNext}
        >
          <MdChevronRight className="bg-yellow-300 text-7xl" />
        </button>
        <div className="mx-4">
          {productsArray.map((card, index) => {
            if (index === currentIndex) {
              return (
                <React.Fragment key={index}>
                  <Featured
                    title={card.title}
                    description={card.description}
                    imageUrl={card.imageUrl}
                  />
                  <br />
                </React.Fragment>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <Contactus backgroundImage={contactImageUrl} />
      <Footer />
    </div>
  );
};

export default Home;
