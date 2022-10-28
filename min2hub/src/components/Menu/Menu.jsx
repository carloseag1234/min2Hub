import React from "react";
import "./Menu.css";
import img from '../../img/logo.svg'

function Menu() {
    return (
      <div className="Menu">
        <div className="container">
          <div className="logo">
            <img src={img} />
          </div>
          <div className="header">
            <ul className="nav">
              <li><a href="/">Inicio</a></li>
              <li><a href="/pedidos">Pedidos</a></li>
              <li><a href="/products">Productos</a></li>
              <li><a href="/perfil">Perfil</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default Menu;
