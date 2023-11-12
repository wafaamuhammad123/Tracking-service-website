// // TrackingDetails.js
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export default function TrackingDetails({ match }) {
//   const { trackingNumber } = match.params;
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`https://tracking.bosta.co/shipments/track/${trackingNumber}`);
//         const responseData = response.data;
//         setData(responseData);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, [trackingNumber]);

//   return (
//     <div>
//       <h1>Tracking Details for {trackingNumber}</h1>
//       {data && (
//         <ul>
//           <li>Tracking Number: {data.TrackingNumber}</li>
//           <li>Provider: {data.provider}</li>
//           <li>Current Status: {data.CurrentStatus.state}</li>
//           <li>Promised Date: {data.PromisedDate}</li>
//           <li>Tracking URL: {data.TrackingURL}</li>
//           {/* Render more properties here */}
//         </ul>
//       )}
//     </div>
//   );
// }
