import React from 'react'
import imagenfondo from '../images/imagenjarron.jpg'
import botellas from '../images/VIDEO INICIATIVA.mp4'
import Iniciativas from './Iniciativas'
import { motion } from 'framer-motion'
const Nosotros = () => {
  return (
    <motion.div
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth, transition: {duration: 0.1}}}
    >
      <section className='container-nosotros'>
        <div className='nosotros'>
          <h2>SOMOS <span className='verde-titulo'>BOTTERY</span></h2>
          <p>Somos un emprendimiento dedicado a la fabricación de <span className='verde'>ecobotellas de arcilla</span>, empleando y/o formando a <span className='verde'>personas con discapacidad</span> en talleres protegidos o asociaciones civiles. Con nuestras ecobotellas de materia prima natural, evitamos la proliferación de envases plásticos de un solo uso. Además, <span className='verde'>reutilizamos plásticos</span> descartados por las industrias para realizar los moldes y el packaging en el proceso de producción. 
Actualmente, estamos investigando recientes e <span className='verde'>innovadoras tecnologías</span> para implementar <span className='verde'>materiales biodegradables</span> en nuestras nuevas  líneas de ecobotellas.
<p>En Bottery, "no salvamos el planeta haciendo botellas, hacemos botellas para salvar el planeta".</p>
</p>
        </div>
      </section>
      <div className='borde-verde'></div>
      <section className='imagenesFondo'>
        <img src={imagenfondo} alt="" />
      </section>
      <section className='container-blog'>
        <div className='blog'>
          <h2>NUESTRO <span className='verde-titulo'>BLOG</span></h2>
          <p>¡Únete a nuestra comunidad y entérate de lo último!</p>
          <button>Visitar</button>
        </div>
      </section>
      <div className='container-botellas-video'>
            <video muted autoPlay loop src={botellas}></video>
        </div>
      <Iniciativas/>
    </motion.div>
  )
}

export default Nosotros