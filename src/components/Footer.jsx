import React from 'react'
import logo from '../images/LOGO BLANCO.png'

const Footer = () => {
  return (
    <>
     <div className='container-footer'>
        <div className='footer' id='#abajo'>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <div className='container-redes'>
                <div className='redes'>
                    <i class="bi bi-envelope-fill"></i>
                    <p>hola.bottery@gmail.com</p>
                </div>
                <div className='redes'>
                <i class="bi bi-instagram"></i>
                    <p>@bottery.ecobottle</p>
                </div>
                <div className='redes'>
                <i class="bi bi-youtube"></i>
                    <p>/bottery.ecobottle</p>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default Footer