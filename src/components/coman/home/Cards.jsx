/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import ShoppingCard from "./ShoppingCard";
import image1 from '../../../assets/card-1.jfif'
import image2 from '../../../assets/card-2.jfif'
import image3 from '../../../assets/card-3.jfif'
import image4 from '../../../assets/card-4.jfif'
import image5 from '../../../assets/card-5.jfif'
import image6 from '../../../assets/card-6.jfif'
import image7 from '../../../assets/card-7.jfif'
import image8 from '../../../assets/card-8.jfif'
import image9 from '../../../assets/card-9.jfif'
import { Link } from "react-router-dom";


function Cards() {
  return (
    <div>
      <p className="sm:text-2xl text-[2.5rem] font-bold flex justify-center py-[4rem]">Shop Prodect</p>
        <div className="">
          <div className="flex flex-wrap justify-center items-center">
            <ShoppingCard
              image={image1}
              name={"shirt"}
              context={
                " This is a sample description of the product that highlights its key features and details."
              }
              price={200.00}
            />
            <ShoppingCard
              image={image2}
              name={"shirt"}
              context={
                " This is a sample description of the product that highlights its key features and details."
              }
              price={10.99}
            />
            <ShoppingCard
              image={image3}
              name={"shirt"}
              context={
                " This is a sample description of the product that highlights its key features and details."
              }
              price={10.99}
            />
            <ShoppingCard
              image={image4}
              name={"shirt"}
              context={
                " This is a sample description of the product that highlights its key features and details."
              }
              price={10.99}
            />
            <ShoppingCard
              image={image5}
              name={"shirt"}
              context={
                " This is a sample description of the product that highlights its key features and details."
              }
              price={10.99}
            />
            <ShoppingCard
              image={image6}
              name={"shirt"}
              context={
                " This is a sample description of the product that highlights its key features and details."
              }
              price={10.99}
            />
            <ShoppingCard
              image={image7}
              name={"shirt"}
              context={
                " This is a sample description of the product that highlights its key features and details."
              }
              price={10.99}
            />
            <ShoppingCard
              image={image8}
              name={"shirt"}
              context={
                " This is a sample description of the product that highlights its key features and details."
              }
              price={10.99}
            />
            <ShoppingCard
              image={image9}
              name={"shirt"}
              context={
                " This is a sample description of the product that highlights its key features and details."
              }
              price={10.99}
            />
          </div>
         
        </div>
         <div className="flex justify-center py-4"> <Link to={"about"} className="border-2 p-4 flex justify-center bg-blue-400">See More </Link></div>
    </div>
  );
}

export default Cards;
