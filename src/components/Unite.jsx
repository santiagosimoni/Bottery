import React from 'react'
import videoCocina from '../images/VIDEO COCINA.mp4'
import Formulario from './Formulario'
import { motion } from 'framer-motion'
const Unite = () => {
  return (
    <motion.div
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth, transition: {duration: 0.1}}}
    >
        <section className='container-cambio'>
            <div className='cambio'>
              <h2>UNÍTE <span className='verde-titulo'>AL CAMBIO</span></h2>
              <p>Confía en nuestras eco botellas personalizadas de <span className='verde'>alta calidad y eco-friendly.</span> <p>Promovemos tu imagen de responsabilidad medioambiental en la industria.</p>
              </p>
            </div>
        </section>
        <div className='borde-verde'></div>
        <div className='container-mision'>
            <video muted autoPlay loop src={videoCocina}></video>
        </div>
        <Formulario/>
    </motion.div>
  )
}

export default Unite