import React from 'react';

import Services from '../components/Services';
import ContactUs from '../components/ContactUs';
import OurLocation from '../components/OurLocation';

const ServicesPage = () => {
	return (
		<div className='Services'>
			<Services />
			<ContactUs />
			<OurLocation />
		</div>
	);
};

export default ServicesPage;
