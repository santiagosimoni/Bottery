import React from 'react'
import video2 from '../images/VIDEO MISION.mp4'
const Mision = () => {
  return (
    <>
        <div className='container-mision'>
            <video muted autoPlay loop src={video2}></video>
            <div className='container-texto-mision'>
            <h2>misión</h2>
            </div>
        </div>
        <div className='mision-info'>
            <div className='mision'>
                <h2>NUESTRA <span className='verde-titulo'>MISIÓN</span></h2>  
                <h3>Nuestra misión es ofrecer <span className='verde'>soluciones sostenibles</span> para la reducción y eliminación del uso de botellas de plástico en la sociedad, trabajando en conjunto con nuestra comunidad y colaboradores para <span className='verde'>promover la industria local</span> responsable y <span className='verde'>concientizar</span> sobre el impacto del plástico en el medio ambiente.</h3>
            </div>      
        </div>
    </>
  )
}

export default Mision