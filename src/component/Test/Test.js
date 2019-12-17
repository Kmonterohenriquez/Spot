import React, { Component } from 'react';
import './Test.css';
class Test extends Component {
	state = {};
	render() {
		return (
			<div className='htmlCompetencies'>
				<div className='container'>
					<img
						src='http://lorempixel.com/400/200
	'
						alt='holaaaaaaaaaaa'
					/>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
						perspiciatis adipisci, distinctio ducimus eum nam omnis odit magnam
						beatae minus maxime, dicta impedit tenetur deleniti! Facilis
						repellendus fugiat mollitia quam!
					</p>
					<input type="text" className='focus'/>
					<div className='background-image'></div>
					<div className='break-word'>
						The Vietnam War was a long, costly and divisive conflict that pitted
						the communist government of North Vietnam against South Vietnam and
						its principal ally, the United States. The conflict was intensified
						by the ongoing Cold War between the United States and the Soviet
						Union. More than 3 million people (including over 58,000 Americans)
					</div>
					<i className='arrow fas fa-arrow-circle-up'></i>
					<label htmlFor="">Able input</label>
					<input type="text"/>
					<label htmlFor="">disabled input</label>
					<input  className='disabled'type="text" disabled/>
				</div>
			</div>
		);
	}
}

export default Test;
