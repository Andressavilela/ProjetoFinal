import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./views/Home";
import Destinos from "./views/Destinos";
import Promocoes from "./views/Promocoes";
import Contato from "./views/Contato";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import ContatoCreate from "./views/Create";
import "./assets/css/style.css";


function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Destinos" element={<Destinos/>} />
        <Route path="/Promocoes" element={<Promocoes/>} />
        <Route path="/Contato" element={<Contato/>} />
        <Route path="/Contato-Create" element={<ContatoCreate />} />
        <Route path="/Contato-Update/:id" element={<ContatoCreate />} />    
 
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
export default App;