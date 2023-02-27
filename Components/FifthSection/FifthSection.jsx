import React from 'react'

// Libraries
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

//  Styles

import '../../src/Styles/fifthSection.css'


const FiftSection = () => {
  return (
    <div className='fifth__section__container'>
      <h5 className="fifth__section__title">¿Cómo podemos ayudarte?</h5>
      <p className="fifth__section__info">Habla con nosotros y trabajemos juntos</p>
      <div className="fifth__section__cards__container">
        <div className="fifth__section__card">
          <BsTelephone className='fifth__section__icon'/>
          <p className='fifth__section__card__info'>800 611 1101</p>
          <p className='fifth__section__card__color__info'>¡Habla con un asesor!</p>
        </div>
        <div className="fifth__section__card">
          <AiOutlineMail className='fifth__section__icon'/>
          <p className='fifth__section__card__info'>contacto@TotalIT.mx</p>
          <p className='fifth__section__card__color__info'>¡Escribenos!</p>
        </div>
        <div className="fifth__section__card">
          <GoLocation className='fifth__section__icon'/>
          <p className='fifth__section__card__info'>Av. Agustin Yañez 2457</p>
          <p className='fifth__section__card__color__info'>Guadalajar, Jalisco, México.</p>
        </div>
      </div>
    </div>
  )
}

export default FiftSection