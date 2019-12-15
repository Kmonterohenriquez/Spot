import React from 'react';

import Upperline from '../../component/Home/Upperline/Upperline';
import Navbar from '../../component/Home/Navbar/Navbar';
import Planning from '../../component/Planning/Planning';
import CEO from '../../component/CEO/CEO';
import ContactLine from '../../component/ContactLine/ContactLine';
import OurLocation from '../../component/OurLocation/OurLocation';


import './About.css';

const About = () => {
	return (
		<div className='About'>
			<Upperline />
			<Navbar />
			<Planning />
			<CEO />
            <ContactLine />
            <OurLocation />
		</div>
	);
};

export default About;
