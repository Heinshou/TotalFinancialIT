import React from 'react'

const SecondStep = ({page, setPage}) => {
    return (
        <div className='inputs__contaner'>
               <p className='sixth__section__title'>Habla con Nosotros</p>
            <p className="step__title">Sobre tu empresa</p>
            <input type="text" className="form__input" placeholder='Nombre del Proyecto' />
            <input type="text" className="form__input" placeholder='Sobre tu Proyecto' />
            <input type="text" className="form__input" placeholder='Descripcion' />
            <input type="number" className="form__input" placeholder='Financiamiento' />
            <div className="buttons__container">
            <button className='form__button second__step__button' onClick={() => setPage(page - 1)}>Atras</button>
            <button className='form__button second__step__button form__right__button' onClick={() => setPage(page + 1)}>Siguiente</button>
            </div>
        </div>
    )
}

export default SecondStep