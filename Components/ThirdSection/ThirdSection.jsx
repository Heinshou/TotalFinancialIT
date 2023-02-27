import React from 'react'

// Images
import thirdImage from '../../src/assets/img/thirdImage.jpg'

// Components
import ThirdSectionInfo from './ThirdSectionInfo.jsx'

//  Styles
import '../../src/Styles/thirdSection.css'


const ThirdSection = () => {
  return (
    <div className='third__section__container'>
        <img src={thirdImage} alt="Imagen escritorio computadora" className='third__section__image' />
        <ThirdSectionInfo/>
    </div>
  )
}

export default ThirdSection