import React, { Component } from 'react';
import './Planning.css'
import planning_img from '../../img/planning.png';
class Planning extends Component {
	state = {};
	render() {
		return (
			<div className='Planning'>
				<div className='Planning-grid container'>
					<div className='left-side'>
						<img src={planning_img} alt='' />
					</div>
					<div className='right-side'>
						<h3>WE LOVE WHAT WE DO</h3>
						<h1>LET'S MAKE YOUR <br/>DESIGN GREAT AGAIN</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
							vero consequuntur cum odio sed quo repudiandae, delectus enim
							ipsa, cupiditate ut iste recusandae quibusdam voluptas officia
							magni amet obcaecati? Culpa.
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Planning;
