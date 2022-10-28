import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import  TarjetaInd  from './components/TarjetaInd/TarjetaInd';
import  Products  from './components/Products/Products';
import  Pedidos  from './components/Pedidos/Pedidos';
import Footer from "./components/Footer/Footer";
import Menu from './components/Menu/Menu';
import SignIn from './components/Perfil/Perfil';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tarjetaInd" element={<TarjetaInd />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path='/perfil' element={<SignIn/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
