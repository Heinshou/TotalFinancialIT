//  Libraries
import React from 'react'
import { useState } from 'react';
import Carousel from 'react-elastic-carousel'


// Icons React-Icons
import { RiMedalLine } from "react-icons/ri";
import { MdSecurity } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiOutlineRise, AiOutlineAppstoreAdd } from "react-icons/ai";
import { BiRun } from "react-icons/bi";


//  Styles

import '../../src/Styles/secondSection.css'

// Component
import Item from './Item';

const SecondSection = () => {

    const [items, setItems] = useState([1, 2, 3, 4, 5, 6]);

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3, },
        { width: 1200, itemsToShow: 3 }
    ];

    const Cards = [
        {
            Icon: <RiMedalLine className='card__icon' />,
            Title: 'Experiencia',
            Text: 'Nuestra práctica implementando todo tipo de proyectos tecnológicos nos ayuda a tomar mejores decisiones con ello no solo financiamos tu proyecto también podemos sumergirnos en el para potencializar tus resultados.'
        },
        {
            Icon: <MdSecurity className='card__icon' />,
            Title: 'Seguridad y Confianza',
            Text: 'Somos una entidad confiable, con experiencia que estamos aquí para ser una pieza clave para llevar a buen puerto tus proyectos quitando la burocracia de entidades tradicionales, recordando que nosotros disminuimos tu riesgo.'
        },
        {
            Icon: <AiOutlineRise className='card__icon' />,
            Title: 'Impulsamos el crecimiento',
            Text: 'Adquisición de Activos Utiliza un tu financiamiento para adquirir o renovar tu equipo de cómputo, telefonía, cctv, controles de acceso, redes, servidores o cualquier otro elemento de hardware informatico que ayude a optimizar tu empresa la empresa o al personal.'
        },
        {
            Icon: <BiRun className='card__icon' />,
            Title: 'Agilidad',
            Text: 'Contamos con atención personalizada, respuesta rápida y solución a tus necesidades.'
        },
        {
            Icon: <AiOutlineAppstoreAdd className='card__icon' />,
            Title: 'Implementa Nuevos Sistemas',
            Text: 'Invierte en innovación y desarrolla o implementa productos y servicios nuevos de tecnologia para dar mas herramientas a tu negocio.'
        },
        {
            Icon: <BsFillPeopleFill className='card__icon' />,
            Title: 'Equipo de Profesionales Nuevos Sistemas',
            Text: 'Especialistas en el otorgamiento de asesoríafinanciera y tecnologica para que tu inversión te de mas por tu dinero.'
        },
    ]

    return (
        <div className='second__section__container'>
            <h3 className='second__section__title'>En Total IT Financial podremos:</h3>
            <div className="cards__container">        
            <Carousel breakPoints={breakPoints}>
                {Cards.map((item) => (
                    <Item key={item.Title}>
                        <div className='cards__sections1'>
                    <div className='front__card card__one'>
                        {item.Icon}
                        <h2 className='front__card__title'>{item.Title}</h2>
                    </div>
                    <div className='back__card card_one'>
                       {item.Text}
                    </div>
                </div>
                    </Item>
                ))}
            </Carousel>
        </div>
        </div>
    )
}

export default SecondSection