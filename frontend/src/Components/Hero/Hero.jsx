// import React from "react";
// import "./Hero.css";
// import hero_image from "../Assets/hero_image.png";

// const Hero = () => {
//   return (
//     <div className="hero">
//       <div className="hero-image-container">
//         <img src={hero_image} alt="hero" className="hero-image" />
//       </div>
//     </div>
//   );
// };

// export default Hero;










// import React from "react";
// import "./Hero.css";
// import hero_image from "../Assets/hero_image.png";
// import hand_icon from "../Assets/hand_icon.png";
// import arrow_icon from "../Assets/arrow.png";

// const Hero = () => {
//   return (
//     <div className="hero">
//       <div className="hero-left">
//         <h2>NEW ARRIVALS ONLY</h2>
//         <div>
//           <div className="hero-hand-icon">
//             <p>new</p>
//             <img src={hand_icon} alt="" />
//           </div>
//           <p>collections</p>
//           <p>for everyone</p>
//         </div>
//         <div className="hero-latest-btn">
//           <div>Latest Collection</div>
//           <img src={arrow_icon} alt="" />
//         </div>
//       </div>
//       <div className="hero-right">
//         <img src={hero_image} alt="hero" />
//       </div>
//     </div>
//   );
// };

// export default Hero;










// import React, { useState, useEffect } from "react";
// import "./Hero.css";
// import hero_image from "../Assets/hero_image.png";

// const Hero = () => {
//   const calculateTimeLeft = () => {
//     const difference = +new Date("2024-12-31") - +new Date();
//     let timeLeft = {};

//     if (difference > 0) {
//       timeLeft = {
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / 1000 / 60) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//       };
//     }

//     return timeLeft;
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearTimeout(timer);
//   });

//   return (
//     <div className="hero">
//       <div className="hero-image-container">
//         <img src={hero_image} alt="hero" className="hero-image" />
//       </div>
//       <div className="hero-text">
//         <h1>Limited time offer, hurry up!</h1>
//         <div className="countdown">
//           {Object.keys(timeLeft).length ? (
//             <div>
//               {Object.keys(timeLeft).map((interval) => (
//                 <span key={interval}>
//                   {timeLeft[interval]} {interval}{" "}
//                 </span>
//               ))}
//             </div>
//           ) : (
//             <span>Time's up!</span>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


























import React, { useState, useEffect } from "react";
import "./Hero.css";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-12-31") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="hero">
      <div className="hero-image-container">
        <img src={hero_image} alt="hero" className="hero-image" />
      </div>
      <div className="hero-text">
        <h1>Limited time offer, hurry up!</h1>
        <div className="countdown">
          {Object.keys(timeLeft).length ? (
            <div>
              <span>{String(timeLeft.hours).padStart(2, '0')} Hrs</span> :{" "}
              <span>{String(timeLeft.minutes).padStart(2, '0')} Mins</span> :{" "}
              <span>{String(timeLeft.seconds).padStart(2, '0')} Secs</span>
            </div>
          ) : (
            <span>Time's up!</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
