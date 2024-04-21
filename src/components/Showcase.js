import React from 'react'
import '../styles/Showcase.sass'
import showcasePic from '../img/showcase2.webp'
const Showcase =()=>{
    
    return(
        <div className="Showcase">
            {/* 54E-2 */}
            {/* 59E	 */}
            <img src={showcasePic} alt="showcase"/>
            <div className="content">
                <h1 className="Showcase-title">
                    Welcome to Spot
                </h1>
                <p className="Showcase-title-2 ">Lorem ipsum dolor consectetur adipisicing elit. Omnis sequi nostrum porro recusandae rerum quidem suscipit?</p>
            </div>
        </div>
    )
}

export default Showcase