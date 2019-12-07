import React from 'react';
import './OurWork.css';

function OurWork() {
	return (
		<div className='OurWork'>
			<div className='container'>
				<p className='title-2 checkout-text'>check out</p>
				<h1 className='title-1 ourwork-text'>Our Work</h1>
				<div className='OurWork-grid-top'>
					<div className='right-side'>
						<img
							src='https://assets.website-files.com/5dcc0b70294b8865063dcae6/5dd52009b98acb7fa42c5635_project-3.jpg'
							alt='landing website 1'
						/>
					</div>
					<div className='left-side'>
						<p className='card-title'>core media</p>
						<p className='card-text grey-text'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse varius enim in elementum tristique.
						</p>
						<div className='card-link'>
							<a href=''> live preview</a>
						</div>
					</div>
				</div>
				<div className='OurWork-grid-bottom'>
					<div className='box-1'>
						<div className='image-container'>
							<img src='https://assets.website-files.com/5dcc0b70294b8865063dcae6/5dd51faab98acb2bee2c5519_project-5.jpg' alt='#' />
						</div>
						<div className='card-content'>
                            <p className='card-title'>printing solution</p>
                            <p className='grey-text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse varius enim in elementum tristique.
                            </p>
                            <div className='card-link'>
                                <a href=''> live preview</a>
                            </div>
                        </div>
					</div>

					<div className='box-2'>
                    <div className='image-container'>
						<img src="https://assets.website-files.com/5dcc0b70294b8865063dcae6/5dd51fc79fa9b18a796df665_project-4.jpg" alt=""/>
					</div>
                    </div>
					<div className='box-3'>
						<div className='card-content'>
                            <p className='card-title'>MYSTERIOUS</p>
                            <p className='grey-text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse varius enim in elementum tristique.
                            </p>
                            <div className='card-link'>
                                <a href=''> live preview</a>
                            </div>
                        </div>
					</div>
					<div className='box-4'>
						<div className='card-content'>
                            <p className='card-title'>flow interactive</p>
                            <p className='grey-text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse varius enim in elementum tristique.
                            </p>
                            <div className='card-link'>
                                <a href=''> live preview</a>
                            </div>
                        </div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default OurWork;
