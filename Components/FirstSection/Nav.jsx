// Libraries
import React from 'react'
import { BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";


// Components
import NavToggleMenu from './NavToggleMenu'


// Images
import Logo from '../../src/assets/img/Logo.png'



const Nav = () => {
  return (
    <div className='nav__container'>
      <img src={Logo} alt="" className='logo__nav' />
      <div className='buttons__nav__container'>
        <button className="nav__button" onClick={() => window.scrollTo(0, 0)}>Inicio</button>
        <button className="nav__button" onClick={() => window.scrollTo(4000, 4000)}>Contacto</button>
        <div className='social__media__icons__container'>
          <span className='nav__line'></span>
          <a href="https://www.facebook.com/Total-It-Financial-108172852200431" className='nav__link__color'><BsFacebook className='icons__social__media'/></a>
          <a href="https://www.linkedin.com/company/total-it-financial/" className='nav__link__color'><BsLinkedin className='icons__social__media'/></a>
          <a href="https://www.instagram.com/total_it_financial/" className='nav__link__color'><BsInstagram className='icons__social__media'/></a>
        </div>
      </div>
      <NavToggleMenu/>
    </div>
  )
}

export default Nav