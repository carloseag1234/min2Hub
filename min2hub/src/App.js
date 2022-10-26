import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import  TarjetaInd  from './components/TarjetaInd/TarjetaInd';
import  Products  from './components/Products/Products';
import  Pedidos  from './components/Pedidos/Pedidos';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tarjetaInd" element={<TarjetaInd />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pedidos" element={<Pedidos />} />
      </Routes>
    </div>
  );
}

export default App;
