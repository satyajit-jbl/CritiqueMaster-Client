// import React from "react";

// const ErrorPage = () => {
//   const handleButtonClick = () => {
//     window.location.href = "/";
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-blue-50">
//       <div className="text-center bg-white p-10 rounded-2xl shadow-lg max-w-lg">
//         <h1 className="text-5xl font-bold text-blue-600 mb-4">Oops!</h1>
//         <p className="text-2xl text-gray-700 mb-2">(Error 404)</p>
//         <p className="text-lg text-gray-500 mb-6">
//           The page you are looking for does not exist or has been moved.
//         </p>
//         <button
//           onClick={handleButtonClick}
//           className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 ease-in-out"
//         >
//           Go to Homepage
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ErrorPage;

import React from "react";
// import { Player } from "@lottiefiles/react-lottie-player";
import errorAnimation from "../assets/error.json"; // Replace with your Lottie file path
import Lottie from "lottie-react";

const ErrorPage = () => {
  const handleButtonClick = () => {
    window.location.href = "/";
  };

  return (
    <div className="flex items-center justify-center h-screen bg-blue-50">
      <div className="text-center bg-white p-10 rounded-2xl shadow-lg max-w-lg">
        <Lottie animationData={errorAnimation}></Lottie>
        <h1 className="text-4xl font-bold text-blue-600 mb-2">Oops! Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-6">
          The page you are looking for does not exist or has been moved.
        </p>
        <button
          onClick={handleButtonClick}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 ease-in-out"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
