import React from 'react'

const FourthSectionInfo = () => {
  return (
    <div className='fourth__section__info__container'>
        <h3 className="fourt__section__title">Asesoría Profesional</h3>
        <p className="fourth__section__info">
          Nuestro equipo de financieros, gerentes de proyecto 
          calificados y expertos técnicos entregan proyectos 
          de TI grandes y complejos con una planificación cuidadosa 
          y una ejecución perfecta mientras mitigan todos los 
          riesgos potenciales.
        </p>
        <button className="fourth__section__button" onClick={() => window.scrollTo(4000, 4000)}>Quiero asesoría para mi financiamiento</button>
    </div>
  )
}

export default FourthSectionInfo