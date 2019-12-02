import React, { Component } from 'react'
import './Services.css'

class Services extends Component {
    state = {  }
    render() {
        return (
            <div className='Services'>
                <div className="center-services container">
                <div className="Services-grid ">
                    <div className="single-service">
                        <img src='https://assets.website-files.com/5dcc0b70294b8865063dcae6/5dceb736646791ae20a144dd_icons8-web.svg' alt='#'/>
                        <h1>web design</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.</p>
                    </div>
                    <div className="single-service">
                        <img src='https://assets.website-files.com/5dcc0b70294b8865063dcae6/5dd53ca4ea80ee007fb725df_icons8-idea%20(3).svg' alt='#'/>
                        <h1>prototyping</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, molestiae!</p>
                    </div>
                    <div className="single-service">
                        <img src='https://assets.website-files.com/5dcc0b70294b8865063dcae6/5dcec860792b965013b7ea13_icons8-code%20(2).svg' alt='#'/>
                        <h1>development</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, molestiae!</p>
                    </div>
                </div>
                <button className='primary-btn'>View Services</button>
                </div>
            </div>
        );
    }
}

export default Services;