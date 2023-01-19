import React from 'react';
import "../css/servicio.css"
import {Link} from 'react-router-dom'

function Servicio() {
  return (
    <div class="contenedor-s container-fluid text-center">
            
        <div class="row">   
            <div class="col-12 col-md-12 col-lg-12">
                <h1> ¿Por que escoger nuestros servicios?</h1>
            </div>     
            <div class="texto col-12 col-md-6 col-lg-4">
                <h4>Calidad en nuestros Productos</h4>
                <p>Ofrecemos los mejores productos en llantas, tubos, aros, válvulas y más. Nos aseguramos de brindarte el seguimiento necesario con informacion relacionada a su adquisición con el fin de que haga una buena elección de nuestras unidades.
                </p>
                <div>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star"></i>
                </div>
            </div>
            <div class="texto col-12 col-md-6 col-lg-4">
                <h4>Servicios a tu necesidad</h4>
                <p>Somos conciente de tu preocupación por querer adquirir lo mejor por lo que te informamos sobre las cualidades y caracteristicas de lo que necesitas. Así mismo contactanos si deseas adquirir los siguientes servicios
                    <br />
                    -Reencauche
                    <br />
                    -
                </p>
                <div>
                    <i class="bi bi-award"></i>
                    <i class="bi bi-award-fill"></i>
                </div>
            </div>
            <div class="texto col-12 col-md-12 col-lg-4">
                <h4>Varios métodos de pago</h4>
                <p>Aceptamos varios métodos de pago en nuestro local con el fin de que se sienta comodo y seguro a la hora de adquirir nuestros productos. 
                    <br />
                    -Tarjetas Debito / Credito
                    <br />
                    -Efectivo
                </p>
                <div>
                    <i class="bi bi-credit-card"></i>
                    <i class="bi bi-wallet2"></i>
                </div>
            </div>
            <div class="row row-margin">
                <div class="botones-s d-flex flex-wrap justify-content-center align-items-center">
                    <Link to="/sobrenosotros">Sobre Nosotros</Link>
                    <a href="mailto:miriamjanina@hotmail.com" target="_blank" rel='noreferrer'>Envianos un Correo</a>
                </div>
            </div>
        </div>
            
    </div>
  )
}

export default Servicio;