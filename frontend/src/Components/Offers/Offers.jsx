// import React from "react";
// import "./Offers.css";
// import exclusive_image from "../Assets/exclusive_image.jpeg";

// const Offers = () => {
//   return (
//     <div className="offers">
//       <div className="offers-left">
//         <h1>People Around you</h1>
//         <h1>prefer these..</h1>
//         <p>Best Selling Fashion around YOU</p>
//         <button>Check now</button>
//       </div>
//       <div className="offers-right">
//         <img src={exclusive_image} alt="" />
//       </div>
//     </div>
//   );
// };

// export default Offers;

//import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Offers.css';
import exclusive_image from '../Assets/exclusive_image.jpeg';

const Offers = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Dummy data to simulate fetching from an API or database
    const data = {
      product: 'Wide Leg Pants',
      sales: 11293,
      message: 'Wide leg pants are more popularly bought in your locality.',
    };

    navigate('/local-trends', { state: { productInfo: data } });
  };

  return (
    <div className="offers">
      <div className="offers-left">
        <h1>People Around you</h1>
        <h1>prefer these..</h1>
        <p>Best Selling Fashion around YOU</p>
        <button onClick={handleClick}>Check now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="Exclusive" />
      </div>
    </div>
  );
};

export default Offers;

