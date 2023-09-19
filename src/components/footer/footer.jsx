// Footer.js
import React from "react";


import "./footer.css"; 

export default function Footer() {
  return (
    <><footer class="footer-distributed">

      <div class="footer-left">

        <h3>Company<span>logo</span></h3>

        <p class="footer-links">
          <a href="#" class="link-1">Home</a>

          <a href="#">Blog</a>

          <a href="#">Pricing</a>

          <a href="#">About</a>

          <a href="#">Faq</a>

          <a href="#">Contact</a>
        </p>

        <p class="footer-company-name">Talentfort (Pvt) Ltd @ 2023</p>
      </div>

      <div class="footer-center">

        <div>
          <i class="fa fa-map-marker"></i>
          <p><span>Prisons Headquarters</span> 
          <span>No.150, Baseline Road,</span>
          <span>Colombo 09,Sri Lanka.</span>
          </p>
        </div>

        <div>
          <i class="fa fa-phone"></i>
          <p>+94 114 677177</p>
        </div>

        <div>
          <i class="fa fa-phone"></i>
          <p>+94 114 677180</p>
        </div>

        <div>
          <i class="fa fa-envelope"></i>
          <p><a href="prisons[at]sltnet.lk">Mail Department of Prison</a></p>
        </div>

      </div>

      <div class="footer-right">

        <p class="footer-company-about">
          <span>About the jail Store</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

        <div class="footer-icons">

          <a href=""><i class="fa fa-facebook"></i></a>
          <a href="#"><i class="fa fa-twitter"></i></a>
          <a href="#"><i class="fa fa-linkedin"></i></a>
          <a href="#"><i class="fa fa-github"></i></a>

        </div>

      </div>

    </footer></>
  );
}
