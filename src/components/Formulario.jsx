import React from 'react'

const Formulario = () => {
  return (
    <>
        <section className='container-contacto'>
            <div className='contacto'>
                <h2 className='verde-titulo'>¡CONTÁCTANOS!</h2>
                <p>Si deseas obtener <span className='verde'>más información</span> sobre nuestros  servicios y lo que hacemos, no dudes en contactarnos.<p>Estaremos encantados de responder a tus consultas lo más pronto posible.</p></p>
            </div>
        </section>
        <div className='container-form'>
            <form action="https://formsubmit.co/santiagosimoni24@gmail.com" method="POST">
                    <div className='form'>
                        <label><span>Nombre</span></label>
                        <input type="text" name="fullname" required/>
                    </div>
                    <div className='form'>
                        <label><span>E-mail</span></label>
                        <input type="email" name="email" required/>
                    </div>
                    <div className='form'>
                        <label><span>Teléfono</span></label>
                        <input type="email" name="email" required/>
                    </div>
                    <div className='form'>
                       <label><span>Mensaje</span></label> 
                        <input name="message" required/>
                    </div>
                        <button className='boton-form'>
                            Enviar
                        </button>
                    <input type="hidden" name='_next' value="https://santiagosimoni.netlify.app" />
                    <input type="hidden" name='_captcha' value="false" />
                </form>
        </div>
    </>
  )
}

export default Formulario