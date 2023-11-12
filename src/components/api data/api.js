import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function Posta() {
  const [data, setData] = useState(null);

  async function fetchData(trackingNumber) {
    try {
      const response = await axios.get(`https://tracking.bosta.co/shipments/track/${trackingNumber}`);
      const data = response.data;

      // Use the data to update your component's state or perform any necessary operations
      console.log(data); // Display the data in the console for now
      setData(data); // Update the state with the fetched data
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    // fetchData('7234258'); // Remove this line since we don't want to fetch data for a specific tracking number initially
  }, []);

  return (
    <div>
      <button onClick={() => fetchData('7234258')}>Tracking Number 1</button>
      <button onClick={() => fetchData('13737343')}>Tracking Number 2</button>
      <button onClick={() => fetchData('67151313')}>Tracking Number 3</button>

      {data && (
        <ul>
          <li>Tracking Number: {data.TrackingNumber}</li>
          <li>Provider: {data.provider}</li>
          <li>Current Status: {data.CurrentStatus.state}</li>
          <li>Promised Date: {data.PromisedDate}</li>
          <li>Tracking URL: {data.TrackingURL}</li>
          {/* Render more properties here */}
        </ul>
      )}
    </div>
  );
}