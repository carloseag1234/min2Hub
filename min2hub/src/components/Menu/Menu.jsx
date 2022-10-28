import React from "react";
import "./Menu.css";
import img from "./img/logo.png";

function Menu() {
    return (
      <div className="Menu">
        <head>
          <title>Menu Desplegable</title>
        </head>
        <div className="logo">
          <img src={img} />
        </div>
        <body>
          <div id="header">
            <ul class="nav">
              <li><a href="">Pedidos</a></li>
              <li><a href="">Productos</a></li>
              <li><a href="">Inicio</a></li>
              <li><a href="">Perfil</a></li>
            </ul>
          </div>
        </body>
      </div>
    );
  }
  
  export default Menu;
