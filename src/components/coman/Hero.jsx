/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-dupe-keys */
/* eslint-disable no-unused-vars */
// /* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable no-unused-vars */


// import image1 from '../../assets/about-1.jpg'
import image1 from '../../assets/fashion.jpg'
// import image3 from '../../assets/maxresdefault.jpg'
// import image4 from '../../assets/img-3.jpeg'
// import image5 from '../../assets/unnamed.jpg'

// import React, { useState, useEffect } from "react";

// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Replace these with your own images
//   const slides = [image1, image2, image3, image4, image5];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   // Auto slide every 2 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 4000);
//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   },    []);

//   return (
//     <div className="relative w-screen h-screen overflow-hidden">
//       {/* Slider wrapper */}
//       <div
//         className="flex transition-transform duration-500 ease-in-out"
//         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//       >
//         {slides.map((slide, index) => (
//           <img
//             key={index}
//             src={slide}
//             alt={`Slide ${index + 1}`}
//             className="w-full h-full object-cover"
//           />
//         ))}
//       </div>

//       {/* Previous Arrow */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
//       >
//         &#10094;
//       </button>

//       {/* Next Arrow */}
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
//       >
//         &#10095;
//       </button>

//       {/* Dots for slide indication */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {slides.map((_, index) => (
//           <div
//             key={index}
//             className={`w-3 h-3 rounded-full ${
//               currentSlide === index ? "bg-white" : "bg-gray-400"
//             }`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HeroSection;



// components/HeroSlider.js
"use client";

// import Image from "next/image";
import { useState, useEffect } from "react";
import { Zoom, Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const images = [image1, image1, image1];

const HeroSection = () => {
  const zoomOutProperties = {
    duration: 4000,
    transitionDuration: 500,
    infinite: true,
    // indicators: true,
    scale: 0.4,
    arrows: true,
  };

  

  return (
       <div className=' flax w-[100vw] h-[100vh]'>
         <Slide {...zoomOutProperties}>
      <div className="each-slide-effect">
        <div
        className='relative  h-[100vh] w-[100vw] bg-cover'
            style={{
              backgroundImage: `url(${images[0]})`,
              
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              // backgroundSize:"cover",
              backgroundAttachment: "fixed",
            }}
        >
          
        </div>
      </div>

      <div className="each-slide-effect">
        <div
        className='relative  h-[100vh] w-[100%] bg-cover'
            style={{
              backgroundImage: `url(${images[1]})`,
              
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
        
              backgroundAttachment: "fixed",
            }}
        >
          
        </div>
      </div>
      <div className="each-slide-effect">
        <div
        className='relative  h-[100vh] w-[100%] bg-cover'
            style={{
              backgroundImage: `url(${images[2]})`,
              
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
        
              backgroundAttachment: "fixed",
            }}
        >
          
        </div>
      </div>
    </Slide>
       </div>
  );
};

export default HeroSection;
