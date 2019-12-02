import React, { Component } from 'react';

import Navbar from '../../component/Home/Navbar/Navbar';
import Upperline from '../../component/Home/Upperline/Upperline';
import Services from '../../component/Services/Services'

class Home extends Component {
	render() {
		return (
			<div className='Home'>
				<Upperline />
				<Navbar />
				<Services />
			</div>
		);
	}
}

export default Home;
