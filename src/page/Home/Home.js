import React, { Component } from 'react';

import Navbar from '../../component/Home/Navbar/Navbar';
import Upperline from '../../component/Home/Upperline/Upperline';
import Services from '../../component/Services/Services'
import Planning from '../../component/Planning/Planning'
import Brands from '../../component/Brands/Brands'
import CEO from '../../component/CEO/CEO'

class Home extends Component {
	render() {
		return (
			<div className='Home'>
				<Upperline />
				<Navbar />
				<Services />
				<Planning />
				<Brands />
				<CEO />
			</div>
		);
	}
}

export default Home;
