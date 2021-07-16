import React from "react";
import Banner from "./banner"
import capture from "C:/Users/Mlab/Desktop/Tl-Production/tl_productions/src/components/Capture.PNG"
function NavigationBar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-white   fixed-top">
      
        <a class="navbar-brand" href="#">
          <img src={capture}  id="logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#Banner">Home</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#About">About Us</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#Services">Programmes</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#testimonials">Successful Stories</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#Footer">Contact Us</a>
        </li>
            
        </ul>
        </div>

      
    </nav>
    <Banner/>
    </>
  );
}
export default NavigationBar;
