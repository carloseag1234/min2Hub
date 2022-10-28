import React from "react";
import './estilo.css';
import p from '../../img/fondo.png';
import a from '../../img/images33.jpeg';
import juan from '../../img/Juan.png';
import AddProductButton from "../Products/addProductButton";

function Home() {
    return (
      <div className="Home">
        <section className="startSection">
          <h1>Precio caidos del cielo!</h1>
          <p>Conoce nuestra propuesta de precios bajos para tu negocio</p>
        </section>
        <section className="information">
          <h1>¿Qué es min2hub</h1>
          <section>
            <img src={p} alt="business model"></img>
            <p>Nuestra empresa propone una solucion a los locatarios para que tengan la oportunidad de pedir sus productos por mayoreo.
  La pagina ofrece una visualizacion de los productos que se estan pidiendo por otros locatarios y la cantidad que falta para completar el pedido minimo de mayoreo.</p>
          </section>
        </section>
        <section className="information QS">
          <h1>¿Quienes Somos?</h1>
          <section>
          <p>Somos un grupo de ciudadanos que se comprometen a ayudar a los vendedores locales de nuestro pais, permitiendo que puedan economizar costos a la hora de surtir sus productos.</p>
          <img src={a} alt="business model"></img>
          </section>
        </section>
        <section className="information CEO">
          <img src={juan} alt="business model"></img>
          <section>
            <p>“En min2hub nos interesamos en ofrecer precios bajos a nuestros clientes, al momento de ofrecer pedidos por mayoreo , y así ayudar al planeta”</p>
            <h3>- Juan Salazar Cortez CEO min2hub</h3>
          </section>
        </section>
      </div>
    );
  }
  
  export default Home;
