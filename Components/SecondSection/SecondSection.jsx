//  Libraries
import React from 'react'
import { RiMedalLine } from "react-icons/ri";
import { MdSecurity } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiOutlineRise, AiOutlineAppstoreAdd } from "react-icons/ai";
import { BiRun } from "react-icons/bi";


//  Styles

import '../../src/Styles/secondSection.css'

const SecondSection = () => {
    return (
        <div className='second__section__container'>
            <h3 className='second__section__title'>En Total IT Financial contamos con:</h3>
            <div className="cards__container">
                <div className='cards__sections1'>
                    <div className='front__card card__one'>
                        <RiMedalLine className='card__icon card__icon__resolution' />
                        <h2 className='front__card__title'>Experiencia</h2>
                    </div>
                </div>
                <div className='cards__sections2'>
                    <div className='front__card card__one'>
                        <MdSecurity className='card__icon' />
                        <h2 className='front__card__title'>Seguridad y Confianza</h2>
                    </div>
                </div>
                <div className='cards__sections3'>
                    <div className='front__card card__one'>
                        <AiOutlineRise className='card__icon' />
                        <h2 className='front__card__title'>Impulsamos el crecimiento</h2>
                    </div>
                </div>
                <div className='cards__sections4'>
                    <div className='front__card card__one'>
                        <BiRun className='card__icon card__icon__resolution' />
                        <h2 className='front__card__title'>Agilidad</h2>
                    </div>
                </div>
                <div className='cards__sections5'>
                    <div className='front__card card__one'>
                        <AiOutlineAppstoreAdd className='card__icon' />
                        <h2 className='front__card__title6'>Implementción de Nuevos Sistemas</h2>
                    </div>
                </div>
                <div className='cards__sections6'>
                    <div className='front__card card__one'>
                        <BsFillPeopleFill className='card__icon' />
                        <h2 className='front__card__title6'>Equipo de Profesionales</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondSection