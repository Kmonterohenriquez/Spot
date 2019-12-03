import React from 'react';
import './OurWork.css'

function OurWork(){
		return (
			<div className='OurWork'>
                <div className="container">
                    <p>check out</p>
                    <h1>Our Work</h1>
                    <div className='OurWork-grid-top'>
                        <div className='right-side'>
                            <img src='https://assets.website-files.com/5dcc0b70294b8865063dcae6/5dd52009b98acb7fa42c5635_project-3.jpg' alt='landing website 1' />
                        </div>
                        <div className="left-side">
                            <h1>core media</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in elementum tristique.</p>
                            <a href="#">live preview</a>
                        </div>
                    </div>
                </div>
			</div>
		);
}

export default OurWork;
