// Libraries
import React from 'react'
import { BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";


// Images
import Logo from '../../src/assets/img/Logo.png'



const Nav = () => {
  return (
    <div className='nav__container'>
      <img src={Logo} alt="" className='logo__nav' />
      <div className='buttons__nav__container'>
        <button className="nav__button">Inicio</button>
        <button className="nav__button">Contacto</button>
        <div className='social__media__icons__container'>
          <span className='nav__line'></span>
          <BsFacebook className='icons__social__media' />
          <BsLinkedin className='icons__social__media' />
          <BsInstagram className='icons__social__media' />
        </div>
      </div>
    </div>
  )
}

export default Nav