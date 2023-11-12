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


// Home.js
// Home.js
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
const TrackingDetails = () => {
  const history = useHistory();

  const navigateToNewPage = () => {
    history.push('/new');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/new">Go to New Page</Link>
      <button onClick={navigateToNewPage}>Navigate to New Page</button>
    </div>
  );
};

export default TrackingDetails;
