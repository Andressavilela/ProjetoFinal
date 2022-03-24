import React from "react";

export default function Promocoes() {
    return (
        <div>
        <div class="titlePromo">
        <h2 class="t">Promoções</h2>
        </div>
        <br />
        <p className="r">Confira nossas ofertas, temos opções que cabem no seu bolso.
                Ofertas com tempo limitado!</p>

                <br /><br /><br /><br />
        <section class="asidelist">           
                  
        <br /><br /><br /><br /><br />
    
        <div class="packages">
        <table class="table2" />
            <tr>
            <td class="imge">
            
                    <img height="30" src="./imagens/saopaulo.png" class="img" alt="São Paulo" />
                    <br />
                    <font class="font4">São Paulo</font>
                    <hr />
                    <font class="font3"><strike>R$ 1000,00</strike></font><br />
                    <font class="font1">R$ 870,00</font><br />
                    <font class="font2">4 dias Hotel Ibis.</font><br />
                </td>
                <td class="imge">
                    <img height="30" src="./imagens/riojaneiro.png" class="img" alt="Rio de Janeiro" />
                    <br />
                    <font class="font4">Rio de Janeiro</font>
                    <hr />
                    <font class="font3"><strike>R$ 2400,00</strike></font><br />
                    <font class="font1">R$1800,00</font><br />
                    <font class="font2"> 3 Dias - Hotel Copacabana Palace.</font><br />
                </td> 
                <td class="imge">
                    <img height="30" src="./imagens/manaus.png" class="img" alt="Manaus" />
                    <br />
                    <font class="font4">Manaus</font>
                    <hr />
                    <font class="font3"><strike>R$ 4000,00</strike></font><br />
                    <font class="font1">R$ 3300,00</font><br />
                    <font class="font2">5 dias - Pousada Mar</font><br />
                </td>
                <td class="imge">
                    <img  height="30" src="./imagens/gramado.png" class="img" alt="Gramado" />
                    <br />
                    <font class="font4">Gramado</font>
                    <hr />
                    <font class="font3"><strike>R$3700,00</strike></font><br />
                    <font class="font1">R$ 2900,00</font><br />
                    <font class="font2">3 dias - Hotel Gramado.</font><br />
                </td>   

            </tr>
            <br /><br />  <br /><br />
        </div>
        </section>
        </div>
    );
}