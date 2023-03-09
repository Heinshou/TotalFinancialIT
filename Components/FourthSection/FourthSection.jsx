// Libraries
import React from 'react'

// Styles
import '../../src/Styles/fourthSection.css'

// Components
import FourthSectionInfo from './FourthSectionInfo.jsx'

// Img
import collage from '../../src/assets/img/collage.png'

const FourthSection = () => {
  return (
    <div className='fourth__section'>
    <div className='fourth__section__container'>
      <div className='fourth__section__image__container'>
        <img src={collage} alt="collage" className='fourth__section__image' />
      </div>
      <FourthSectionInfo/>
    </div>
    </div>
  )
}

export default FourthSection