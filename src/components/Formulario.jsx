import React from 'react'

const Formulario = () => {
  return (
    <>
        <section className='container-contacto'>
            <div className='contacto'>
                <h2 className='verde'>¡CONTÁCTANOS!</h2>
                <p>Si deseas obtener <span className='verde'>más información</span> sobre nuestros  servicios y lo que hacemos, no dudes en contactarnos.<p>Estaremos encantados de responder a tus consultas lo más pronto posible.</p></p>
            </div>
        </section>
        <div className='container-form'>
            <form action="https://formsubmit.co/santiagosimoni24@gmail.com" method="POST">
                    <p>
                        <label>Nombre</label>
                        <input type="text" name="fullname" required/>
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="email" name="email" required/>
                    </p>
                    <p>
                        <label>Telefono</label>
                        <input type="email" name="email" required/>
                    </p>
                    <p>
                       <label>Mensaje</label> 
                        <textarea name="message" required></textarea>
                    </p>
                    <p>
                        <button>
                            Enviar
                        </button>
                    </p>
                    <input type="hidden" name='_next' value="https://santiagosimoni.netlify.app" />
                    <input type="hidden" name='_captcha' value="false" />
                </form>
        </div>
    </>
  )
}

export default Formulario