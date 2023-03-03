import React from 'react'

const ThirdStep = ({ page, setPage }) => {

  console.log(page)
  return (
    <div className='third__input__container'>
      <p className='sixth__section__title third__title' >Habla con Nosotros</p>
      <div className="timeline__container">
        <div className='timeline__line first__line'></div>
        <div className='timeline__circle  first__circle'>1</div>
        <div className='timeline__line second__line'></div>
        <div className='timeline__circle second__circle'>2</div>
        <div className='timeline__line third__line'></div>
        <div className='timeline__circle third__circle'>3</div>
        <div className='timeline__line last__line'></div>
      </div>
      <p className="step__title">Comentarios</p>
      <input type="text" className="coment__input " placeholder='Agrega un comentario' />
      <div className="buttons__container">
        <button className='form__button third__step__button' onClick={() => setPage(page - 1)}>Atrás</button>
        <button className='form__button third__step__button form__right__button' >Enviar</button>
      </div>
    </div>
  )
}

export default ThirdStep