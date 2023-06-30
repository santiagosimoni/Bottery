import React from 'react'
import imagenfondo from '../images/imagenjarron.jpg'
import botellas from '../images/VIDEO INICIATIVA.mp4'
import Iniciativas from './Iniciativas'
const Nosotros = () => {
  return (
    <>
      <section className='container-nosotros'>
        <div className='nosotros'>
          <h2>SOMOS <span className='verde'>BOTTERY</span></h2>
          <p>Somos una empresa pionera en la fabricación de <span className='verde'>ecobotellas de arcilla</span> en Argentina. Nuestro principal objetivo es <span className='verde'>reducir el uso de botellas</span> de plástico desechables en todo el mundo al proporcionar una alternativa ecológica en cerámica. Además, nos enorgullece nuestro compromiso con la inclusión social aportando trabajo a personas con diferentes discapacidades desde nuestros <span className='verde'>Talleres Protegidos.</span></p>
        </div>
      </section>
      <div className='borde-verde'></div>
      <section className='imagenesFondo'>
        <img src={imagenfondo} alt="" />
      </section>
      <section className='container-blog'>
        <div className='blog'>
          <h2>NUESTRO <span className='verde'>BLOG</span></h2>
          <p>¡Unite a nuestra comunidad y  enterate de lo último!</p>
          <button>Visitar</button>
        </div>
      </section>
      <div className='container-mision'>
            <video muted autoPlay loop src={botellas}></video>
        </div>
      <Iniciativas/>
    </>
  )
}

export default Nosotros