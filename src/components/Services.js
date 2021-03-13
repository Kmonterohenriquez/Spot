import React, { Component } from 'react';
import '../styles/Services.sass';
import PageTitle from './PageTitle';
import { withRouter } from 'react-router-dom';
class Services extends Component {
	render() {
		const location = this.props.location.pathname;
		return (
			<div className='Services'>
				{location === '/' ? null : <PageTitle title='Services' />}
				<div className='center-services container'>
					<div className='Services-grid '>
						<div className='single-service'>
							<img
								src='https://assets.website-files.com/5dcc0b70294b8865063dcae6/5dceb736646791ae20a144dd_icons8-web.svg'
								alt='#'
							/>
							{/* 54F-1 */}
							<h1>web design</h1>
							{/* 54F-2 */}
							<h2>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Suspendisse varius.
							</h2>
						</div>
						<div className='single-service'>
							<img
								src='https://assets.website-files.com/5dcc0b70294b8865063dcae6/5dd53ca4ea80ee007fb725df_icons8-idea%20(3).svg'
								alt='#'
							/>
							<h1>prototyping</h1>
							<h2>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
								molestiae!
							</h2>
						</div>
						<div className='single-service'>
							<img
								src='https://assets.website-files.com/5dcc0b70294b8865063dcae6/5dcec860792b965013b7ea13_icons8-code%20(2).svg'
								alt='#'
							/>
							<h1>development</h1>
							<h2>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
								molestiae!
							</h2>
						</div>
					</div>
					<button className='primary-btn'>View Services</button>
				</div>
			</div>
		);
	}
}

export default withRouter(Services);
