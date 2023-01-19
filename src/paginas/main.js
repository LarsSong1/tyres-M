import React from 'react'
import Marcas from '../componentes/marcas';
import Carrusel from '../componentes/carrusel';
import Servicio from '../componentes/servicio';
import '../css/carrusel.css'


function Main() {
    return (
        <article className='main-contenedor'>
            <Carrusel />
            <Servicio />
            <Marcas/>
        </article>
    )
}

export default Main