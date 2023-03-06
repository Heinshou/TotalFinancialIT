import React from 'react'

//Components

import { useState } from 'react'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import ThirdStep from './ThirdStep'

//Style
import '../../src/Styles/sixthSection.css'

// Image

import formImage from '../../src/assets/img/formImage.jpeg'

const SixthSection = () => {
    const [page, setPage] = useState(1)

  return (
    <div className='sixth__section__container'>
        <div className="form__container">  
            {
                page == 1 ? 
                <FirstStep
                page={page}
                setPage={setPage}
                /> : 
                page == 2 ? 
                <SecondStep
                page={page}
                setPage={setPage}
                /> : 
                page == 3 ?
                <ThirdStep
                page={page}
                setPage={setPage}
                /> : 
                ''
            }
        </div>
        {/* <div className="sixth__section__image__container">
            <img src={formImage} alt="imagen formulario" className='sixth__section__image__form' />
        </div>   */}
    </div>
  )
}

export default SixthSection