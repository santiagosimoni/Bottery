import React from 'react'
import videoTrabajo from '../images/VIDEO JARRON.mp4'
import Premios from './Premios'
import { motion } from 'framer-motion'
const Trabajo = () => {
  return (
    <motion.div
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth, transition: {duration: 0.1}}}
    >
        <div className='container-eco'>
            <div className='eco-botellas'>
                <h2>ECO <span className='verde'>BOTELLAS</span></h2>
                <p>Nuestras <span className='verde'>eco-botellas</span> personalizadas de <span className='verde'>materia prima</span> natural evitan la proliferación de envases plásticos de un solo uso.</p>
            </div>
        </div>
        <div className='borde-verde'></div>
        <div className='container-mision'>
            <video muted autoPlay loop src={videoTrabajo}></video>
        </div>
        <section className='container-beneficios'>
                <h2>BENEFICIOS <span className='verde'>ECO-BOTELLAS</span></h2>
            <div className='beneficios'>
                <div className='beneficio'>
                    <h3 className='titulo-benef verde'>Personalizacion</h3>
                    <p>Ecobotellas diseñadas y fabricadas según tus necesidades.</p>
                </div>
                <div className='beneficio'>
                <h3 className='titulo-benef verde'>Calidad superior</h3>
                    <p>Materiales duraderos y resistentes que cumplen estándares exigentes.</p>
                </div>
                <div className='beneficio'>
                <h3 className='titulo-benef verde'>Sostenibilidad</h3>
                    <p>Materiales naturales o reciclados para evitar el consumo de plástico.</p>
                </div>
                <div className='beneficio'>
                <h3 className='titulo-benef verde'>Entrega puntual</h3>
                    <p>Compromiso de cumplir con los plazos acordados y el mejor servicio postventa.</p>
                </div>
            </div>
        </section>
        <div className='centrar'><div className='rectangulo-trabajo'></div></div>
        <Premios/>
    </motion.div>
  )
}

export default Trabajo