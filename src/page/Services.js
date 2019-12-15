import React from 'react';

import Services from '../component/Services/Services';
import ContactUs from '../component/ContractUs/ContactUs';
import OurLocation from '../component/OurLocation/OurLocation';

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
