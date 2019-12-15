import React from 'react';

import Planning from '../component/Planning/Planning';
import CEO from '../component/CEO/CEO';
import ContactLine from '../component/ContactLine/ContactLine';
import OurLocation from '../component/OurLocation/OurLocation';


const About = () => {
	return (
		<div className='About'>
			<Planning />
			<CEO />
            <ContactLine />
            <OurLocation />
		</div>
	);
};

export default About;
