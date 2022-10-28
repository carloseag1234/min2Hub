import React from "react";
import './tarjeta.css';
import caja from '../../img/cajaDeComida.png';

function TarjetaInd() {
    return (
      <div className="TarjetaInd">
        <section class="popupCard">
          <section class="leftSide">
              <h1>Nombre</h1>
              <section class="productInfo">
                  <section>
                      <h3>Usuario:</h3>
                      <p>perez@gmail.com</p>
                  </section>
                  <section>
                      <h3>Tipo de Producto:</h3>
                      <p>Fruta</p>
                  </section>
                  <section>
                      <h3>Lugar:</h3>
                      <p>Aviación</p>
                  </section>
              </section>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae nostrum ipsum delectus, voluptatibus, itaque dolore debitis cum accusantium voluptate cupiditate earum asperiores quibusdam porro ullam illo modi ipsam provident beatae.</p>
              <section class="progressBar">
                  <section class="currentProgress"></section>
              </section>
              <section class="bottomPart">
                  <button class="shopingCartButton">Agregar al carro</button>
                  <button class="descriptionButton"><span></span></button>
              </section>
          </section>
          <section class="rightSide">
              <button><span></span></button>
              <img src={caja} alt="foto del producto"></img>
          </section>
        </section> 
      </div>
    );
  }

  export default TarjetaInd;
