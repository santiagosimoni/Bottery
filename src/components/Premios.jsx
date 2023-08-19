import React from 'react'
import img1 from '../images/img premio 1.jpeg'
import img2 from '../images/img premio 2.png'
import img4 from '../images/img premio 3.jpeg'
import img5 from '../images/img premio 6.png'
import img6 from '../images/img premio 4.png'
import img7 from '../images/img premio 5.png'
const Premios = () => {
    const logros =[{
        id: 1,
        titulo: '2022 - Ganador del Premio Emprendedor "Compañía Alumni JAA"',
        texto:'Segundo lugar en el concurso emprendedor de “Junior Achievement Americ” dentro de la categoría emprendimiento  desarrollado en Latinoamérica  con actividades enmarcadas dentro de los ODS (Objetivos de Desarrollo Sostenible). Gracias a él ganamos la posibilidad de participar en una beca internacional en Watson Institute USA. ',
        img: img1,
    },
    {
        id: 2,
        titulo:'2023 - Ganador del premio "Idea 2023 Córdoba"',
        texto: 'Seleccionado en orden de mérito entre los 10 mejores emprendimientos de la provincia. Gracias a este premio, ganamos la posibilidad de capacitarnos en Encubacor y un ANR para desarrollar la idea',
        img: img2,
        autor: 'Autor de la foto: cordobaproduce.cba.gob.ar (premio renunciado)'
    },
    {
        id:3,
        titulo: '2023 - Finalista del Premio Nacional "Argentina Economía Circular"',
        texto : 'Selecciónados entre los mejores emprendimientos a nivel nacional. El premio es un reconocimiento e incentivo a los emprendimientos sociales y ambientalmente sostenibles. Impulsado por “Observatorio Pyme”, “Regenerar” y “GTA”. Patrocinado por el gobierno de BA, la fundación Banco Ciudad y la fundación Grupo Petersen',
        img: img4,
    },
    {
        id:4,
        titulo: '2023 - Ganadores Mención de honor del Premio Nacional "UCEMA IDS 2023"',
        texto : 'Bottery recibió la “Mención de Producción Responsable (ODS 12)”. El Premio UCEMA Impacto Digital Sostenible busca respaldar y fomentar proyectos sostenibles que generen un impacto demostrable. Nos enorgullece compartir que Bottery ha sido reconocido como un proyecto de triple impacto, alineado con los ODS y con un gran potencial de escalabilidad. El premio es desarrollado por la Universidad del Centro de Estudios Macroeconómicos de Argentina (CEMA)',
        img: img5,
        autor: 'Autor de la foto: Universidad UCEMA '
    },
    {
        id:5,
        titulo: '2023- Ganadores del Concurso “NAVES Federal” de Banco Macro y el IAE business school.',
        texto : 'Bottery fue seleccionado como ganador de su sede y como premio continuará su formación con los contenidos de NAVES Nacional. El objetivo de NAVES Federal es potenciar los emprendimientos a través de una formación sólida, acompañamiento, feedback y acceso a una amplia red de contactos. El programa es desarrollado por la Fundación Banco Macro y el IAE business school de la Universidad Austral',
        img: img7,
    },
    {
        id:6,
        titulo: '2023- Semifinalista del concurso #VOSLOHACÉS de BA (Gobierno CABA)',
        texto : '#VosLoHacés busca identificar ideas innovadoras y acompañar el proceso hasta convertirlas en emprendimientos sostenibles en el tiempo. Gracias a él, BOTTERY pudo desarrollar su PMV de botella 100% compostable',
        img: img6,
    },
]
    
  return (
    <>
        <section className='container-premios'>
            <div className='premios'>
            <h2>NUESTROS <span className='verde-titulo'>PREMIOS</span></h2>
            {logros?.map((p)=>(
                <div className='info-premios' key={p.id}>
                    <h3 className='verde-titulo'>{p.titulo}</h3>
                    <p>{p.texto}</p>
                    <img src={p.img} alt="" />
                    <p>{p.autor}</p>
                </div>
            ))}
            </div>
        </section>
    </>
  )
}

export default Premios