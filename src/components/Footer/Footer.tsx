import React from "react";
import "./Footer.css";
import logo from "../../materials/logo.png";

export function Footer() {
  return (
    <div className="Footer">
      <div>
        <div>
          <img className="logo" src={logo} alt="" />
          <p>We're shutting the door on second-rate student housing</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <p>Review a property</p>
          <p>Articles</p>
          <p>About us</p>
          <p>Contact us</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div>
          <h3>Stay In Touch</h3>
          <p>
            <i className="bi bi-telephone-fill"></i>012 9638595661
          </p>
          <p>
            <i className="bi bi-envelope-fill"></i>info@uniletadvisor.com
          </p>
          <p>
            <i className="bi bi-geo-alt-fill"></i>10 Archibald St Toowoomba QLD
            4350
          </p>
        </div>
        <div>
          <h3>Connect with</h3>
          <p>
            <i className="bi bi-facebook"></i>Facebook
          </p>
          <p>
            <i className="bi bi-twitter"></i>Twitter
          </p>
          <p>
            <i className="bi bi-instagram"></i>Instagram
          </p>
        </div>
      </div>
      <hr />
      <div>
        <p>Unilet Advisor © 2020. All Rights Reserved.</p>
      </div>
    </div>
  );
}
