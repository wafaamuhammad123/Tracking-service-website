import React, { useState } from "react";
import Api from "../api data/api";
import axios from 'axios';

import './header.css';
const Header = () => {
    const [trackingNumber, setTrackingNumber] = useState("");
    const [headerData, setHeaderData] = useState(null);

    const handleDataUpdate = (data) => {
        setHeaderData(data);
    };

    const handleTrackingNumberChange = (e) => {
        setTrackingNumber(e.target.value);
    };

    const handleFetchData = async () => {
        try {
            const response = await axios.get(`https://tracking.bosta.co/shipments/track/${trackingNumber}`);
            const responseData = response.data;
            setHeaderData(responseData);
        } catch (error) {
            console.error(error);
        }
    };

  return (

<nav class="navbar navbar-expand-lg navbar-light bg-light">
 
  <div class="container">
 
    <img src="/Untitled.png" alt="My Image" style={{ marginRight: '5px',width: '10%', height: 'auto' }} />


    <div class="collapse navbar-collapse" id="navbarButtonsExample">

      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <div class="dropdown-container">
    <span>Products</span>
    <div class="dropdown-content">
    <a href="#" class="dropdown-option"> Solutions</a>
      <a href="#" class="dropdown-option"> Dashboard</a>
      <a href="#" class="dropdown-option"> Mobile App</a>
    </div>
  </div>

    <div class="dropdown-container2">
    <span>Integration</span>
    <div class="dropdown-content">
      <a href="#" class="dropdown-option">Shopify</a>
      <a href="#" class="dropdown-option"> Woocommerce</a>
      <a href="#" class="dropdown-option"> Custom apis</a>
    </div>
  </div>

  <div class="dropdown-container3">
    <span>Usecases</span>
    <div class="dropdown-content">
      <a href="#" class="dropdown-option"> Buisness</a>
      <a href="#" class="dropdown-option">SMEs</a>
    </div>
  </div>


        <li class="nav-item">
          <a class="nav-link" href="#" >  pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Blog</a>
        </li>
   
      </ul>
     
      <div className="d-flex align-items-center">
      <div className="dropdown-container4">
                <span>Track shipment</span>
                <div className="dropdown-content" style={{ padding: '23px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <p>track your shipment</p>
                    <input
                        type="text"
                        placeholder="Enter Tracking Number"
                        value={trackingNumber}
                        onChange={handleTrackingNumberChange}
                    />
                    <button className="tracking-button" onClick={handleFetchData}>
                        Fetch Data
                    </button>
                    {headerData && (
                        <ul className="tracking-details">
                            <li>Tracking Number: {headerData.TrackingNumber}</li>
                            <li>Provider: {headerData.provider}</li>
                            <li>Current Status: {headerData.CurrentStatus.state}</li>
                            <li>Promised Date: {headerData.PromisedDate}</li>
                            <li>Tracking URL: {headerData.TrackingURL}</li>
                         
                        </ul>
                    )}
                </div>
            </div>


     <div class="dropdown-container5">
    <span>En</span>
    <div class="dropdown-content">
      <a href="#" class="dropdown-option"> En</a>
      <a href="#" class="dropdown-option"> Arabic</a>
    </div>
  </div>

  
        <button type="button" class="btn btn-link px-3 me-2">
          Sign In
        </button>
        <button type="button" class="btn2 btn-primary me-3">
          Sign up
        </button>
    
      </div>
    </div>
 
  </div>
 
</nav>




  )
};

export default Header;
