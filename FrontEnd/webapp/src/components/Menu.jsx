import React from "react"
import { Link } from "react-router-dom"
import "../assets/css/style.css"

export default function Menu() {
    return (
        <nav class="Display" id="display">
           
                <Link to="/"class="bar">Agência</Link>
                <Link to="/Destinos" class="bar">Destinos</Link>
                <Link to="/Promocoes" class="bar">Promoções</Link>
                <Link to="/Contato" class="bar">Contato</Link>
            
           
        </nav>
    );
}