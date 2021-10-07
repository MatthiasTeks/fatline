import React from "react";
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";

import Tattoo1 from '../assets/images/tattoo1.jpg'
import Tattoo2 from '../assets/images/tattoo2.jpg'
import Tattoo3 from '../assets/images/tattoo3.jpg'
import Tattoo4 from '../assets/images/tattoo4.jpg'
import Tattoo5 from '../assets/images/tattoo5.jpg'
import Tattoo6 from '../assets/images/tattoo6.jpg'

let Slider = () => {
    return ( 
            <Carousel showThumbs={false} showStatus={false} showIndicators={false} swipeable emulateTouch>
            <div>
                <img src={Tattoo1} alt='irezumi tattoo'/>
            </div>
            <div>
                <img src={Tattoo2} alt='irezumi tattoo'/> 
            </div>
            <div>
                <img src={Tattoo3} alt='irezumi tattoo' />
            </div>
            <div>
                <img src={Tattoo4} alt='irezumi tattoo' />
            </div>
            <div>
                <img src={Tattoo5} alt='irezumi tattoo' />
            </div>
            <div>
                <img src={Tattoo6} alt='irezumi tattoo' />
            </div>
        </Carousel>
    )
}

export default Slider