import React from 'react';
import './OurLocation.css'
import location from '../../img/Mapdark.png'

const OurLocation=()=>{
    return(
        <div className='OurLocation'>
            <div className="container">
                <p className="red-paragraph">located all around</p>
                <h1 className='title-1'>Our Locations</h1>
                <img src={location} alt="" height="400"/>
                <p className="grey-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque minima laborum debitis nisi. Odio, maxime?</p>
                <p><strong>Address: </strong>123 Main street, Orlando, Fl. 33897</p>
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.6591647455584!2d-111.89485428435052!3d40.438545462235815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d97574f96827d%3A0xf1e15119e2daaefd!2sDevMountain%20%7C%20Lehi!5e0!3m2!1sen!2sus!4v1575877836083!5m2!1sen!2sus" width="600" height="450" frameborder="0" style={{border: 0}} allowFullscreen="true" title="ourAdress"></iframe>

        </div>
    )
}

export default OurLocation