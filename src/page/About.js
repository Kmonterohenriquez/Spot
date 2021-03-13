import React from 'react';
import PageTitle from '../components/PageTitle'
import Planning from '../components/Planning';
import CEO from '../components/CEO';
import ContactLine from '../components/ContactLine';
import OurLocation from '../components/OurLocation';


const About = () => {
	return (
		<div className='About'>
			<PageTitle title='About'/>
			<Planning />
			<CEO />
            <ContactLine />
            <OurLocation />
		</div>
	);
};

export default About;
