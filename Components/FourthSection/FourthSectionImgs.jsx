import React from 'react'
import imageOne from '../../src/assets/img/imageOne.png'
import imageTwo from '../../src/assets/img/imageTwo.png'
import imageThree from '../../src/assets/img/imageThree.png'
import imageFour from '../../src/assets/img/imageFour.png'

const FourthSectionImgs = () => {
    return (
        <div className="images__container">
            <img src={imageThree} alt="imagen persona" className='fourth__section__image__four' />
            <img src={imageFour} alt="imagen persona" className='fourth__section__image__three' />
            <img src={imageOne} alt="imagen persona" className='fourth__section__image__one' />
            <img src={imageTwo} alt="imagen persona" className='fourth__section__image__two' />
        </div>
    )
}

export default FourthSectionImgs