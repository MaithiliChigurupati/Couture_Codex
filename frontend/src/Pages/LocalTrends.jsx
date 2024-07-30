// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const LocalTrends = () => {
//   const location = useLocation();
//   const productInfo = location.state?.productInfo;

//   return (
//     <div>
//       <h1>Local Trends</h1>
//       {productInfo ? (
//         <div>
//           <h2>{productInfo.product}</h2>
//           <p>{productInfo.message}</p>
//           <p>Number of Sales: {productInfo.sales}</p>
//         </div>
//       ) : (
//         <p>No product information available.</p>
//       )}
//     </div>
//   );
// };

// export default LocalTrends;


// import React from 'react';
// import { useLocation } from 'react-router-dom';
// //import "./CSS/LocalTrend.css";
// import cover_page from 'frontend/src/Components/Assets/coverpage.png';

// const LocalTrends = () => {
//   const location = useLocation();
//   const productInfo = location.state?.productInfo;

//   return (
//     <div className="local-trends-container" style={{ backgroundImage: `url(${cover_page})` }}>
//       <div className="content">
//         <h1 className="local-trends-title">Local Trends</h1>
//         {productInfo ? (
//           <div className="trend-info">
//             <h2 className="trend-product">{productInfo.product}</h2>
//             <p className="trend-message">{productInfo.message}</p>
//             <p className="trend-sales">Number of Sales: {productInfo.sales}</p>
//           </div>
//         ) : (
//           <p className="no-info">No product information available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LocalTrends;






// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import 'frontend/src/Pages/CSS/LocalTrends.css'; // Importing the CSS file

// const LocalTrends = () => {
//   const location = useLocation();
//   const productInfo = location.state?.productInfo;

//   return (
//     <div className="local-trends-container">
//       <h1>Local Trends</h1>
//       {productInfo ? (
//         <div>
//           <h2>{productInfo.product}</h2>
//           <p>{productInfo.message}</p>
//           <p className="number-of-sales">Number of Sales: {productInfo.sales}</p>
//         </div>
//       ) : (
//         <p className="no-product-info">No product information available.</p>
//       )}
//     </div>
//   );
// };

// export default LocalTrends;


// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import './LocalTrend.css'; // Importing the CSS file

// const LocalTrends = () => {
//   const location = useLocation();
//   const productInfo = location.state?.productInfo;

//   return (
//     <div className="local-trends-container">
//       <h1 className="local-trends-title">Local Trends</h1>
//       {productInfo ? (
//         <div className="product-info">
//           <h2 className="product-name">{productInfo.product}</h2>
//           <div className="image-placeholder">
//             {/* Placeholder for an image, can be replaced with an actual <img> tag */}
//             <p>Image goes here</p>
//           </div>
//           <p className="product-message">{productInfo.message}</p>
//           <p className="sales-count">Number of Sales: {productInfo.sales}</p>
//         </div>
//       ) : (
//         <p className="no-product-info">No product information available.</p>
//       )}
//     </div>
//   );
// };

// export default LocalTrends;


// import React from 'react';
// import './LocalTrend.css'; // Importing the CSS file

// const LocalTrends = () => {
//   // Sample data, replace with actual data as needed
//   const productInfo = {
//     product: 'Wide Leg Jeans',
//     message: 'Wide leg jeans are the most selling in your locality',
//     sales: 150, // Example number of sales
//     imageUrl: 'https://www.madish.in/cdn/shop/files/Madish_Landing_Page_Boyfriend_Jeans_Nov_2023-Web-1.webp?v=1700986002&width=3000' // Replace with your image path
//   };

//   return (
//     <div className="local-trends-container">
//       <h1 className="local-trends-title">Local Fashion Trend</h1>
//       {productInfo ? (
//         <div className="product-info">
//           <h2 className="product-name">{productInfo.product}</h2>
//           <p className="product-message">{productInfo.message}</p>
//           <p className="sales-count">Number of Sales: {productInfo.sales}</p>
//           <div className="image-container">
//             <img src={productInfo.imageUrl} alt="Product" className="product-image" />
//           </div>
//         </div>
//       ) : (
//         <p className="no-product-info">No product information available.</p>
//       )}
//     </div>
//   );
// };

// export default LocalTrends;

// import React from 'react';
// import './LocalTrend.css'; // Importing the CSS file
// import localTrendImage from '../assets/localtrend.png'; // Adjust the path according to your file structure

// const LocalTrends = () => {
//   // Sample data, replace with actual data as needed
//   const productInfo = {
//     product: 'Wide Leg Jeans',
//     message: 'Wide leg jeans are the most selling in your locality',
//     sales: 150, // Example number of sales
//     imageUrl: localTrendImage // Use the imported image
//   };

//   return (
//     <div className="local-trends-container">
//       <h1 className="local-trends-title">Local Fashion Trend</h1>
//       {productInfo ? (
//         <div className="product-info">
//           <h2 className="product-name">{productInfo.product}</h2>
//           <p className="product-message">{productInfo.message}</p>
//           <p className="sales-count">Number of Sales: {productInfo.sales}</p>
//           <div className="image-container">
//             <img src={productInfo.imageUrl} alt="Product" className="product-image" />
//           </div>
//         </div>
//       ) : (
//         <p className="no-product-info">No product information available.</p>
//       )}
//     </div>
//   );
// };

// export default LocalTrends;

// import React from 'react';
// import '../Pages/LocalTrend.css'; // Adjust the path according to your file structure
// import localTrendImage from '../Components/Assets/localtrend.png'; // Corrected path

// const LocalTrends = () => {
//   // Sample data, replace with actual data as needed
//   const productInfo = {
//     //product: 'Wide Leg Jeans',
//     message: 'Wide leg jeans are the most selling in your locality',
//     sales: 150, // Example number of sales
//     imageUrl: localTrendImage // Use the imported image
//   };

//   return (
//     <div className="local-trends-container">
//       <h1 className="local-trends-title">Local Fashion Trend</h1>
//       {productInfo ? (
//         <div className="product-info">
//           <h2 className="product-name">{productInfo.product}</h2>
//           <p className="product-message">{productInfo.message}</p>
//           <p className="sales-count">Number of Sales: {productInfo.sales}</p>
//           <div className="image-container">
//             <img src={productInfo.imageUrl} alt="Product" className="product-image" />
//           </div>
//         </div>
//       ) : (
//         <p className="no-product-info">No product information available.</p>
//       )}
//     </div>
//   );
// };

// export default LocalTrends;

import React from 'react';
import '../Pages/LocalTrend.css'; // Adjust the path according to your file structure
import localTrendImage from '../Components/Assets/localtrend.png'; // Corrected path

const LocalTrends = () => {
  // Sample data, replace with actual data as needed
  const productInfo = {
    product: 'Wide Leg Jeans',
    message: 'Wide leg jeans are the most selling in your locality',
    sales: 12150, // Example number of sales
    imageUrl: localTrendImage // Use the imported image
  };

  return (
    <div className="local-trends-container">
      <h1 className="local-trends-title">Local Fashion Trend</h1>
      {productInfo ? (
        <div className="product-info">
          <h2 className="product-name">{productInfo.product}</h2>
          <p className="product-message">{productInfo.message}</p>
          <p className="sales-count">Number of Sales: {productInfo.sales}</p>
          <div className="image-container">
            <img src={productInfo.imageUrl} alt="Product" className="product-image" />
          </div>
        </div>
      ) : (
        <p className="no-product-info">No product information available.</p>
      )}
      <footer className="footer">
        <p>© 2024 Couture Flex</p>
      </footer>
    </div>
  );
};

export default LocalTrends;


