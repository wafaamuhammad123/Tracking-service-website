import React from 'react';
import './header.css';
const Header = () => {
  return <header>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
 
  <div class="container">
 
    <a class="navbar-brand me-2" href="https://mdbgo.com/">
      <img
        src="Untitled.png"
        alt="MDB Logo"
        loading="lazy"
       
      />
    </a>

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
          <a class="nav-link" href="#">pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Blog</a>
        </li>
   
      </ul>
     

      <div class="d-flex align-items-center">
      <div class="dropdown-container4">
    <span>Track shipment</span>
    <div class="dropdown-content">
      <a href="#" class="dropdown-option">Option 1</a>
      <a href="#" class="dropdown-option">Option 2</a>
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

  </header>;



};

export default Header;
