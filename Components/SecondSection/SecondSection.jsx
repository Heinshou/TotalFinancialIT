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
                    <div className='big__back__card card_one'>
                        Experiencia en proyectos tecnológicos para tomar mejores decisiones,
                        potencializar resultados y financiar proyectos.
                    </div>
                </div>
                <div className='cards__sections2'>
                    <div className='front__card card__one'>
                        <MdSecurity className='card__icon' />
                        <h2 className='front__card__title'>Seguridad y Confianza</h2>
                    </div>
                    <div className='big__back__card card_one'>
                        La entidad ofrece confiabilidad y experiencia para ser una pieza clave en proyectos,
                        eliminando la burocracia y disminuyendo riesgos.
                    </div>
                </div>
                <div className='cards__sections3'>
                    <div className='front__card card__one'>
                        <AiOutlineRise className='card__icon' />
                        <h2 className='front__card__title'>Impulsamos el crecimiento</h2>
                    </div>
                    <div className='big__back__card card_one'>
                        La empresa ofrece financiamiento para adquirir o renovar activos de hardware informático 
                        que optimicen la empresa o al personal.
                    </div>
                </div>
                <div className='cards__sections4'>
                    <div className='front__card card__one'>
                        <BiRun className='card__icon card__icon__resolution' />
                        <h2 className='front__card__title'>Agilidad</h2>
                    </div>
                    <div className='back__card card_one'>
                        Contamos con atención personalizada, respuesta rápida y
                        solución a tus necesidades.
                    </div>
                </div>
                <div className='cards__sections5'>
                    <div className='front__card card__one'>
                        <AiOutlineAppstoreAdd className='card__icon' />
                        <h2 className='front__card__title6'>Implementción de Nuevos Sistemas</h2>
                    </div>
                    <div className='back__card card_one'>
                        Invierte en innovación y desarrolla o implementa
                        productos y servicios nuevos de tecnologia para
                        dar mas herramientas a tu negocio.
                    </div>
                </div>
                <div className='cards__sections6'>
                    <div className='front__card card__one'>
                        <BsFillPeopleFill className='card__icon' />
                        <h2 className='front__card__title6'>Equipo de Profesionales</h2>
                    </div>
                    <div className='back__card card_one'>
                        Especialistas en el otorgamiento de asesoría
                        financiera y tecnologica para que tu inversión te de
                        mas por tu dinero.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondSection