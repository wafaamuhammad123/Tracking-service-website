import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './api.css';

const Api = ({ onDataUpdate }) => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [data, setData] = useState(null);

  async function fetchData() {
    try {
      const response = await axios.get(`https://tracking.bosta.co/shipments/track/${trackingNumber}`);
      const responseData = response.data;

      console.log(responseData);
      setData(responseData);

      // Pass the data to the parent component
      onDataUpdate(responseData);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    // Uncomment the line below if you want to fetch data for a specific tracking number initially
    // fetchData();
  }, [trackingNumber]); // Include trackingNumber in the dependency array to fetch data when it changes

  return (
    <div className="data">
   

      {data && (
        <ul className="tracking-details">
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
};

export default Api;
