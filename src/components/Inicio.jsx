import React from 'react'
import video from '../images/VIDEO BOTTERY INICIO.mp4'
import Info from './Info'
import Mision from './Mision'
const Inicio = () => {
  
  return (
    <div>  
      <div className='container-reciclar'>
        <video muted autoPlay loop src={video}></video>
        <div className='container-texto-reciclar'>
          <h2>#RECICLAR</h2>
          <h2>NO ALCANZA</h2>
        </div>          
    </div>
    <Info/>
    <div className='borde-verde'></div>
    <Mision/>
  </div>
  )
}

export default Inicio