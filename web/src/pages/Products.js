import React from 'react';
import Navbar from "../components/Navigation.js";
import Footer from "../components/Footer.js";
import Card from "../components/Card.js";
import { productsArray } from '../CardProd.js';

const Product = (props) => {
  return (
    <div className="bg-black">
      <Navbar />
      <section className="bg-black body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
          <div className="mx-auto max-w-2xl px-4 py-5 pt-30 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {productsArray.map((product, index) => (
              <>
                <Card product={product}/>
              </>
            ))}
          </div>
        </div>
        </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Product;
