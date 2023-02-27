// Libraries
import React from 'react'

// Styles
import '../../src/Styles/fourthSection.css'

// Components
import FourthSectionImgs from './FourthSectionImgs.jsx'
import FourthSectionInfo from './FourthSectionInfo.jsx'

const FourthSection = () => {
  return (
    <div className='fourth__section'>
    <div className='fourth__section__container'>
      <FourthSectionImgs/>
      <FourthSectionInfo/>
    </div>
    </div>
  )
}

export default FourthSection