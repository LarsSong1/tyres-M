import React from 'react'
import Estructurap from './estructura'
import llanta1 from '../img/llantas.svg'
import llanta2 from '../img/llantas 2.svg'
import ProductosLLantas from './llantas-estructura';



function Llantas() {
  return (
    <article>
      <Estructurap
        llanta={llanta1}
        titulo="LLANTAS"
        descripcion="Los neumáticos son uno de los elementos más importantes de un vehículo, especialmente aquellos que tienen que transportar grandes cargas como camiones o furgonetas, debido a que son los únicos componentes entre el suelo y el propio vehículo.
        Elegir llantas de calidad es una de las decisiones más importantes que puedes tomar para tu vehículo, puesto a que estas dependen muchos factores de seguridad y comodidad.
        Aqui en Tyres&M ofrecemos los mejores modelos."
        marca="HANKOOK k424"
        precio="$110"
        distribuidor="Hankook"
        llanta2={llanta2}
      />
      <ProductosLLantas/>
     
    </article>

  );
};

export default Llantas;