import React, { Component } from 'react';

import Showcase from '../components/Showcase';
import Services from '../components/Services';
import Planning from '../components/Planning';
import Brands from '../components/Brands';
import CEO from '../components/CEO';
import OurWork from '../components/OurWork';
import Team from '../components/Team';
import ContactLine from '../components/ContactLine';
import Pricing from '../components/Princing';
import Blogs from '../components/Blogs';
import OurLocation from '../components/OurLocation';
import ContactUs from '../components/ContactUs';

class Home extends Component {
	render() {
		return (
			<div className='Home'>
				<Showcase />
				<Services />
				<Planning />
				<Brands />
				<CEO />
				<OurWork />
				<Team />
				<ContactLine />
				<Pricing />
				<Blogs />
				<ContactUs />

				<OurLocation />
			</div>
		);
	}
}

export default Home;
