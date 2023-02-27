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
            {/* <h3 className='second__section__title'>En Total IT Financial podremos:</h3> */}
            {/* <div className="cards__container"> */}
            <div className='cards__sections1'>
                <div className='front__card card__one'>
                    <RiMedalLine className='card__icon'/>
                    <h2 className='front__card__title'>Experiencia</h2>
                </div>
                <div className='back__card card_one'>
                Nuestra práctica implementando todo tipo de proyectos
                tecnológicos nos ayuda a tomar mejores decisiones con
                ello no solo financiamos tu proyecto también podemos
                sumergirnos en el para potencializar tus resultados.
                </div>
            </div>
            <div className='cards__sections2'>
                <div className='front__card card__one'>
                    <MdSecurity className='card__icon'/>
                    <h2 className='front__card__title'>Seguridad y Confianza</h2>
                </div>
                <div className='back__card card_one'>
                Somos una entidad confiable, con experiencia que estamos 
                aquí para ser una pieza clave para llevar a buen puerto 
                tus proyectos quitando la burocracia de entidades 
                tradicionales, recordando que nosotros disminuimos tu 
                riesgo.
                </div>
            </div>
            <div className='cards__sections3'>
                <div className='front__card card__one'>
                    <AiOutlineRise className='card__icon'/>
                    <h2 className='front__card__title'>Impulsamos el crecimiento</h2>
                </div>
                <div className='back__card card_one'>
                Adquisición de Activos Utiliza un tu financiamiento para 
                adquirir o renovar tu equipo de cómputo, telefonía, 
                cctv, controles de acceso, redes, servidores o cualquier 
                otro elemento de hardware informatico que ayude a 
                optimizar tu empresa la empresa o al personal.
                </div>
            </div>
            <div className='cards__sections4'>
                <div className='front__card card__one'>
                    <BiRun className='card__icon'/>
                    <h2 className='front__card__title'>Agilidad</h2>
                </div>
                <div className='back__card card_one'>
                Contamos con atención personalizada, respuesta rápida y 
                solución a tus necesidades.
                </div>
            </div>
            <div className='cards__sections5'>
                <div className='front__card card__one'>
                    <AiOutlineAppstoreAdd className='card__icon'/>
                    <h2 className='front__card__title'>Implementa Nuevos Sistemas</h2>
                </div>
                <div className='back__card card_one'>
                Invierte en innovación y desarrolla o implementa 
                productos y servicios nuevos de tecnologia para 
                dar mas herramientas a tu negocio.
                </div>
            </div>
            <div className='cards__sections6'>
                <div className='front__card card__one'>
                    <BsFillPeopleFill className='card__icon'/>
                    <h2 className='front__card__title6'>Equipo de Profesionales Nuevos Sistemas</h2>
                </div>
                <div className='back__card card_one'>
                Especialistas en el otorgamiento de asesoría 
                financiera y tecnologica para que tu inversión te de 
                mas por tu dinero.
                </div>
            </div>
        </div>
    )
}

export default SecondSection