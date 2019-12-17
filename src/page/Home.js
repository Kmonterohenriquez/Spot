import React, { Component } from 'react';

import Showcase from '../component/Showcase/Showcase';
import Services from '../component/Services/Services';
import Planning from '../component/Planning/Planning';
import Brands from '../component/Brands/Brands';
import CEO from '../component/CEO/CEO';
import OurWork from '../component/OurWork/OurWork';
import Team from '../component/Team/Team';
import ContactLine from '../component/ContactLine/ContactLine';
import Pricing from '../component/Pricing/Princing';
import Blogs from '../component/Blogs/Blogs';
import OurLocation from '../component/OurLocation/OurLocation';
import ContactUs from '../component/ContractUs/ContactUs';
import Test from '../component/Test/Test';

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
				<Test />
				<OurLocation />
			</div>
		);
	}
}

export default Home;
