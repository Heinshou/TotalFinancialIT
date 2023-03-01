import React from 'react'

const FirstStep = ({ page, setPage }) => {
  return (
    <div className='inputs__contaner'>
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
      <p className="step__title">Contacto</p>
      <input type="text" className="form__input" placeholder='Nombre' />
      <input type="email" className="form__input" placeholder='Email' />
      <input type="number" className="form__input" placeholder='Telefono' />
      <div className="buttons__container">
        <button className='form__button first__step__button' onClick={() => setPage(page + 1)}>Siguiente</button>
      </div>
    </div>
  )
}

export default FirstStep