
// import React from "react";

// export default function SuspenseLoader() {
//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="bar-loader"></div>
//     </div>
//   );
// }

import React from "react";

export default function SuspenseLoader() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="loader-container">
        <div className="loader-bar"></div>
        <div className="loader-bar"></div>
        <div className="loader-bar"></div>
      </div>
    </div>
  );
}