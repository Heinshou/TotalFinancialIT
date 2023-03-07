import React from 'react'

const SecondStep = ({ page, setPage }) => {
    return (
        <div className='inputs__contaner'>
            <p className='sixth__section__title'>Habla con Nosotros</p>
            <div className="timeline__container">
                <div className='timeline__line first__line'></div>
                <div className='timeline__circle  first__circle'>1</div>
                <div className='timeline__line second__line'></div>
                <div className='timeline__circle second__circle'>2</div>
                <div className='timeline__line  empty__line'></div>
                <div className='timeline__circle  empty'>3</div>
                <div className='timeline__line  empty__line'></div>
            </div>
            <p className="step__title">Sobre tu empresa</p>
            <input type="text" className="form__input" placeholder='Nombre del Proyecto' id='proyecto' />
            <input type="text" className="form__input" placeholder='Sobre tu Proyecto' id='acerca'/>
            <input type="text" className="form__input" placeholder='Descripción' id='descripcion'/>
            <input type="number" className="form__input" placeholder='Financiamiento' id='financiamiento'/>
            <div className="buttons__container">
                <button className='form__button second__step__button' onClick={() => setPage(page - 1)}>Atrás</button>
                <button className='form__button second__step__button form__right__button' onClick={() => setPage(page + 1)}>Siguiente</button>
            </div>
        </div>
    )
}

export default SecondStep