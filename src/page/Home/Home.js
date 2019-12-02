import React, { Component } from 'react';

import Navbar from '../../component/Home/Navbar/Navbar';
import Upperline from '../../component/Home/Upperline/Upperline';

class Home extends Component {
	render() {
		return (
			<div className='Home'>
				<Upperline />
				<Navbar />
			</div>
		);
	}
}

export default Home;
