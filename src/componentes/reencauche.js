import React from 'react'
import Estructurap from './estructura'
import reencauche from '../img/reencauche.svg'
import reencauche2 from '../img/reencauche2.svg'
import ReencaucheEstructura from './reencauche-estructura'

function Reencauche() {
  return (
    <section>
      <Estructurap
        llanta={reencauche}
        titulo="REENCAUCHE Y MÁS"
        descripcion="Los neumáticos reencauchados, a veces llamados neumáticos remanufacturados, se reciclan y reemplazan la banda de rodadura desgastada de las llantas viejas por otras nuevas, esto ayuda a prolongar la vida útil del neumático. Por lo que el reciclaje de neumáticos es un buen ejemplo de economía circular. 
        Aqui en Tyres&M contamos con ese servicio y màs"
        marca="SIERRA 750x16 TM"
        precio="$110"
        distribuidor="Caucho Sierra"
        llanta2={reencauche2}
      />
      <ReencaucheEstructura/>

    </section>

  );
};

export default Reencauche