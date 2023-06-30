import React from 'react'
import img1 from '../images/img premio 1.jpeg'
import img2 from '../images/img premio 2.png'
import img4 from '../images/img premio 3.jpeg'
const Premios = () => {
    const logros =[{
        id: 1,
        titulo: '2022 - Ganador Premio Emprendedor Alumni JAA',
        texto:'Segundo lugar en el concurso emprendedor de “Junior Achievement Americ” dentro de la categoría emprendimiento  desarrollado en Latinoamérica  con actividades enmarcadas dentro de los ODS (Objetivos de Desarrollo Sostenible). Gracias a él ganamos la posibilidad de participar en una beca internacional en Watson Institute USA. ',
        img: img1
    },
    {
        id: 2,
        titulo:'2023 Ganador premio - Idea 2023 Córdoba',
        texto: 'Seleccionado en orden de mérito dentro de los 10 mejores ideas emprendimientos de la provincia de Córdoba Argentina. Gracias a esté premio ganamos la posibilidad de capacitarnos en Encubacor y un ANR para desarrollar la idea.',
        img: img2,
    },
    {
        id:3,
        titulo: '2023 Finalista - Premio Nacional “Argentina Economía Circular”',
        texto : 'Selecciónados entre los mejores emprendimientos a nivel nacional. El premio es un reconocimiento e incentivo a los emprendimientos sociales y ambientalmente sostenibles. Impulsado por “Observatorio Pyme”, “Regenerar” y “GTA”. Patrocinado por el gobierno de BA, la fundación Banco Ciudad y la fundación Grupo Petersen',
        img: img4,
    },
]
    
  return (
    <>
        <section className='container-premios'>
            <div className='premios'>
            <h2>NUESTROS <span className='verde'>PREMIOS</span></h2>
            {logros?.map((p)=>(
                <div className='info-premios' key={p.id}>
                    <h3 className='verde'>{p.titulo}</h3>
                    <p>{p.texto}</p>
                    <img src={p.img} alt="" />
                </div>
            ))}
            </div>
        </section>
    </>
  )
}

export default Premios