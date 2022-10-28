import React from "react";
import img from '../../img/logo.svg'
import './Footer.css'


function Footer() {
    return (
      <div className="Footer">
          <div className="Logo">
            <img src={img}/>
          </div>
          <div className="Text">
            <text >
              <b>
                Copyright © 2022
              </b>
            </text>
          </div>
      </div>    
    );
  }
  
  export default Footer;
