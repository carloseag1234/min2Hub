import React from "react";
import './estilo.css';
import cajaComida from '../../img/cajaDeComida.png';
import Footer from "../Footer/Footer";

function Products() {
    return (
      <div className="Products">
        <section>
          <img src={cajaComida}></img>
          <h3>Caja de viveres</h3>
          <p>Esto es una prueba de lo Que sería un párrafo con una pequeña información……</p>
          <section class="progressBar">
              <section class="currentProgress"></section>
          </section>
          <section class="bottomPart">
              <button class="shopingCartButton">Agregar al carro</button>
              <button class="descriptionButton"><span></span></button>
          </section>
        </section>
        <Footer/>
      </div>
    );
  }
  
  export default Products;
