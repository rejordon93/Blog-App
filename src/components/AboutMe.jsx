// AboutMe.js

import React from "react";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./AboutMe.css";

export const AboutMe = () => {
  return (
    <div className="about-me-all">
      <div className="about-me-container">
        <h3 className="newH3">ABOUT ME</h3>

        <img
          src={
            "https://images.pexels.com/photos/2682452/pexels-photo-2682452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt="Girl Working"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel est
          beatae accusantium quibusdam architecto sapiente, deleniti dignissimos
          eos earum natus eligendi fugit corrupti dolore commodi atque qui omnis
          quis laborum libero nisi. Neque quaerat eius soluta molestias
          consequatur corrupti eaque asperiores perspiciatis! Illo asperiores
          sapiente quae mollitia, numquam eius praesentium.
        </p>
        <hr />
        <h3>CATEGORIES</h3>
        <hr />
        <ul>
          <li>Life</li>
          <li>Music</li>
          <li>Sports</li>
          <li>Style</li>
          <li>Tech</li>
          <li>Cinema</li>
        </ul>
        <div className="follow-us">
          <h3>FOLLOW US</h3>
          <div className="about-me">
            <FontAwesomeIcon icon={faInstagram} className="icon" />
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
