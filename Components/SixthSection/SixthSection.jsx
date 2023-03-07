
import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

//Style
import '../../src/Styles/example.css'

// Image
import imageForm from '../../src/assets/img/imageForm.jpg'


const SixthSection = () => {
    const [step, setStep] = useState('first__step')

    const [firstStep, setFirstStep] = useState('inactive')
    const [secondStep, setSecondStep] = useState('inactive')
    const [thirdStep, setThirdStep] = useState('inactive')


    useEffect(() => {

        if (step == 'first__step') {
            setFirstStep('active')
            setSecondStep('inactive')
            setThirdStep('inactive')
        } else if (step == 'second__step') {
            setFirstStep('inactive')
            setSecondStep('active')
            setThirdStep('inactive')
        } else {
            setFirstStep('inactive')
            setSecondStep('inactive')
            setThirdStep('active')
        }


    }, [step])


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_igw2p39', 'template_cdinkra', e.target, 'DJuv5VWQoTC-m6087')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <div className='sixth__section__container'>
            {/* onSubmit={sendEmail} */}
            <form onSubmit={sendEmail}>
                <div className={`form__container ${step}`} >
                    <div className="form__step__one__container">
                        <div className='form__step__one__container__width'>
                            <p className='sixth__section__title' >Habla con Nosotros</p>
                            <div className="timeline__container">
                                <div className='timeline__line first__line'></div>
                                <div className='timeline__circle  first__circle'>1</div>
                                <div className='timeline__line  empty__line'></div>
                                <div className='timeline__circle  empty'>2</div>
                                <div className='timeline__line  empty__line'></div>
                                <div className='timeline__circle  empty'>3</div>
                                <div className='timeline__line  empty__line'></div>
                            </div>
                            <div className="step__title__container">
                                <p className={`step__title__one ${firstStep}`}>Contacto</p>
                                <p className={`step__title__two ${secondStep}`}>Sobre tu empresa</p>
                                <p className={`step__title__three ${thirdStep}`}>Comentarios</p>
                            </div>
                            <input type="text" className="form__input" placeholder='Nombre' name='nombre' />
                            <input type="email" className="form__input" placeholder='Email' name='email' />
                            <input type="number" className="form__input" placeholder='Teléfono' name='telefono' />
                            <div className="buttons__container">
                                <div className='form__button first__step__button' onClick={() => setStep('second__step')}>Siguiente</div>
                            </div>
                        </div>
                    </div>
                    <div className="form__step__two__container">
                        <div className='form__step__two__container__width'>
                            <p className='sixth__section__title' >Habla con Nosotros</p>
                            <div className="timeline__container">
                                <div className='timeline__line first__line'></div>
                                <div className='timeline__circle  first__circle'>1</div>
                                <div className='timeline__line second__line'></div>
                                <div className='timeline__circle second__circle'>2</div>
                                <div className='timeline__line  empty__line'></div>
                                <div className='timeline__circle  empty'>3</div>
                                <div className='timeline__line  empty__line'></div>
                            </div>
                            <div className="step__title__container">
                                <p className={`step__title__one ${firstStep}`}>Contacto</p>
                                <p className={`step__title__two ${secondStep}`}>Sobre tu empresa</p>
                                <p className={`step__title__three ${thirdStep}`}>Comentarios</p>
                            </div>
                            <input type="text" className="form__input" placeholder='Nombre del Proyecto' id='proyecto' name='proyecto' />
                            <input type="text" className="form__input" placeholder='Sobre tu Proyecto' id='acerca' name='acerca' />
                            <input type="text" className="form__input" placeholder='Descripción' id='descripcion' name='descripcion' />
                            <input type="number" className="form__input" placeholder='Financiamiento' id='financiamiento' name='financiamiento' />
                            <div className="buttons__container">
                                <div className='form__button second__step__button' onClick={() => setStep('first__step')}>Atrás</div>
                                <div className='form__button second__step__button form__right__button' onClick={() => setStep('third__step')}>Siguiente</div>
                            </div>
                        </div>
                    </div>
                    <div className="form__step__three__container">
                        <div className='form__step__three__container__width'>
                            <p className='sixth__section__title' >Habla con Nosotros</p>
                            <div className="timeline__container">
                                <div className='timeline__line first__line'></div>
                                <div className='timeline__circle  first__circle'>1</div>
                                <div className='timeline__line second__line'></div>
                                <div className='timeline__circle second__circle'>2</div>
                                <div className='timeline__line third__line'></div>
                                <div className='timeline__circle third__circle'>3</div>
                                <div className='timeline__line last__line'></div>
                            </div>
                            <div className="step__title__container">
                                <p className={`step__title__one ${firstStep}`}>Contacto</p>
                                <p className={`step__title__two ${secondStep}`}>Sobre tu empresa</p>
                                <p className={`step__title__three ${thirdStep}`}>Comentarios</p>
                            </div>
                            <input type="text" className="coment__input " placeholder='Agrega un comentario' id='comentarios' name='comentarios' />
                            <div className="buttons__container">
                                <div className='form__button third__step__button' onClick={() => setStep('second__step')}>Atrás</div>
                                <button className='form__button third__step__button form__right__button'>Enviar</button>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="sixth__section__image__container">
            <img src={imageForm} alt="imagen formulario" className='sixth__section__image__form' />
        </div>  
            </form>
        </div>
    )
}

export default SixthSection