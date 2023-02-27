import React from 'react'

// Components
import Nav from './Nav'
import Information from './Information'
import ButtonsBar from './ButtonsBar'


// Image
import firstImage from '../../src/assets/img/firstImage.jpg'

// Styles
import '../../src/Styles/firstSection.css'

const FirstSection = () => {
  return (
    <div className='first__section__container'  style={{backgroundImage:`linear-gradient( to bottom right, rgba(46, 69, 122, 0.3) 0% , rgba(0, 0, 0, 0.6) 100%), url(${firstImage})`}}>
        <Nav/>
        <Information/>
        {/* <ButtonsBar/> */}
    </div>
  )
}

export default FirstSection