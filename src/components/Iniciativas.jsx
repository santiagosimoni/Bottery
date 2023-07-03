import React from 'react'
import nosotros1 from '../images/nosotros1.png'
import nosotros2 from '../images/nosotros2.png'
import nosotros3 from '../images/nosotros3.png'

const Iniciativas = () => {
  return (
    <>
        <section className='container-iniciativa'>
            <div className='iniciativa'>
                    <h2>
                        INICIATIVAS <span className='verde-titulo'>DESTACADAS</span>
                    </h2>
                <div className='texto-iniciativa'>
                    <p>Desde su lanzamiento en 2022, Bottery ha evolucionado de ser una ecobotella a convertirse en un <span className='verde'>movimiento global</span> que toma medidas en la lucha contra el plástico.
                    </p>
                </div>
                <div className='vistazo'>
                    <span className='verde'>Un vistazo de lo que hacemos:</span>
                </div>
            </div>
        </section>
        <section className='imagenes-iniciativa'>
            <div className='container-imagenes-nosotros'>
                <div className='imagenes-nosotros'>
                    <div className='imagen-circular'><img src={nosotros1} alt="" /></div>
                    <p className='verde'>ECO-BOTELLAS</p>
                </div>
                <div className='imagenes-nosotros'>
                    <div className='imagen-circular'><img src={nosotros3} alt="" /></div>
                    <p className='verde'>LIMPIEZA DE PLAYA</p>
                </div>
                <div className='imagenes-nosotros'>
                    <div className='imagen-circular'><img src={nosotros2} alt="" /></div>
                    <p className='verde'>CAPACITACIONES</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default Iniciativas