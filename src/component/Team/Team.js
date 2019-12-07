import React, { Component } from 'react';
import './Team.css';

class Team extends Component {
	state = {};
	render() {
		return (
			<div className='Team'>
				<div className='container'>
					<p className='red-paragraph'>best team ever</p>
					<div className='Team-top'>
						<h1 className='title-1'>The team</h1>
						<button className='primary-btn'>join us</button>
					</div>
					<div className='grid-team'>
						<div className='member'>
							<div className='picture-container'>
								<img src='#' alt='#' />
							</div>
							<div className='Team-content'>
								<p className='member-name'>person name</p>
								<p className='red-paragraph position-job'>position job</p>
								<div className='social-media'>
									<div className='circle'>
										<i className='fab fa-twitter'></i>
									</div>
									<div className='circle'>
										<i className='fab fa-instagram'></i>
									</div>
									<div className='circle'>
										<i class='fab fa-linkedin-in'></i>
									</div>
								</div>
							</div>
						</div>
						<div className='member'>
							<div className='picture-container'>
								<img src='#' alt='#' />
							</div>
							<div className='Team-content'>
								<p className='member-name'>person name</p>
								<p className='red-paragraph'>position job</p>
								<div className='social-media'>
									<div className='circle'>
										<i className='fab fa-twitter'></i>
									</div>
									<div className='circle'>
										<i className='fab fa-instagram'></i>
									</div>
									<div className='circle'>
										<i class='fab fa-linkedin-in'></i>
									</div>
								</div>
							</div>
						</div>
						<div className='member'>
							<div className='picture-container'>
								<img src='#' alt='#' />
							</div>
							<div className='Team-content'>
								<p className='member-name'>person name</p>
								<p className='red-paragraph'>position job</p>
								<div className='social-media'>
									<div className='circle'>
										<i className='fab fa-twitter'></i>
									</div>
									<div className='circle'>
										<i className='fab fa-instagram'></i>
									</div>
									<div className='circle'>
										<i class='fab fa-linkedin-in'></i>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Team;
