import React from 'react'
import Estructurap from './estructura'
import tubo from '../img/tubos.svg'
import tubo2 from '../img/tubos2.svg'
import TubosEstructura from './tubos-estructura';
function Tubos() {
  return (
    <section>
    <Estructurap
    llanta={tubo}
    titulo="TUBOS"
    descripcion="La cámara de aire o tubo juega un papel importante en la sensación y el rendimiento del neumático. La cámara de aire debe tener la forma y el tamaño correctos para estar al ras con la pared lateral para una buena sensación uniforme. Si hay un área que la cámara de aire no puede tocar, el neumático se sentirá blando. La instalación de neumáticos con el tamaño de cámara correcto es importante para el rendimiento y para evitar pinchazos. En Tyres&M te asesoramos y te ofrecemos las mejores opciones."
    marca="TUBO MOÑON LARGO 16 TR1"
    precio="$16"
    distribuidor="Tyres&M"
    llanta2={tubo2}
    />
    <TubosEstructura/>
    </section>
  
    
  );
};

export default Tubos