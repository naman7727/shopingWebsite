/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const ShoppingCard = ({image,  name, context, price}) => {

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white m-4 sm:max-w-xs md:max-w-[30%] lg:max-w-[30%] xl:max-w-[30%]">
      <img 
        className="w-full object-cover h-48 sm:h-36 md:h-48 lg:h-56 xl:h-64" 
        src= {image}
        alt="Product"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
         {context}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        <span className="text-gray-900 font-bold text-xl">&#8377; {price}</span>
        <button className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 focus:outline-none">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ShoppingCard;
