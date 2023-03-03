import React, { useState, useEffect } from 'react'

import { RxCross2 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";

const NavToggleMenu = () => {

    const [menuIcon, setMenuIcon] = useState(true)
  
    
   useEffect(() => {
   
     return () => {
      
     }
   }, [menuIcon])
   
    
  return (
    <div className='toggle__button__container'>
        <button className='inactive__button' onClick={() => setMenuIcon(!menuIcon)}>
        { menuIcon == false ? 
        <div className="toggle__menu__container">
          <div className='close__toggle__menu__button'>
          <RxCross2 className='close__icon'/>
          </div> 
          <button className="toggle__menu__button">Inicio</button>
          <button className="toggle__menu__button">Contacto</button>
          <div className='toggle__menu__social__media__icons__container'>
          <a href="https://www.facebook.com/Total-It-Financial-108172852200431" className='nav__link__color'><BsFacebook className='icons__social__media'/></a>
          <a href="https://www.linkedin.com/company/total-it-financial/" className='nav__link__color'><BsLinkedin className='icons__social__media'/></a>
          <a href="https://www.instagram.com/total_it_financial/" className='nav__link__color'><BsInstagram className='icons__social__media'/></a>
          </div>
        </div>

        : 
        <AiOutlineMenu/>}
        </button>
                <div className='toggle__menu__active'>
        </div>
    </div>
  )
}

export default NavToggleMenu