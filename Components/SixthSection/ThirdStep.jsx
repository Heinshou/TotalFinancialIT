import React from 'react'

const ThirdStep = ({page, setPage}) => {

    console.log(page)
  return (
    <div className='third__input__container'>
           <p className='sixth__section__title third__title' >Habla con Nosotros</p>
            <p className="step__title">Comentarios</p>
            <input type="text" className="coment__input " placeholder='Agrega un comentario'/>
            <div className="buttons__container">
            <button className='form__button third__step__button' onClick={() =>setPage(page - 1)}>Atras</button>
            <button className='form__button third__step__button form__right__button' >Enviar</button>
            </div>
    </div>
  )
}

export default ThirdStep