import React from 'react';

const Contactus = ({ backgroundImage }) => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center"
    >
      <div className="text-white text-center">
        <h1 className="text-7xl font-bold mb-4 text-yellow-300">Contact us</h1>
        <p className="text-4xl text-yellow-100">Discover Our Most Liked and Delicious Burgers</p>

        <div className="max-w-md mx-auto mt-8 p-6 bg-yellow-100 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-yellow-300">Get in touch</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name:</label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email:</label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message:</label>
              <textarea className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Enter your message"></textarea>
            </div>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
