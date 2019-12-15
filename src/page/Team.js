import React from 'react';

import Team from '../component/Team/Team';
import Brands from '../component/Brands/Brands';
import ContactLine from '../component/ContactLine/ContactLine';
import OurLocation from '../component/OurLocation/OurLocation';

const TeamPage = () => {
	return (
		<div className='Team'>
			<Team />
			<Brands />
			<ContactLine />
			<OurLocation />
		</div>
	);
};

export default TeamPage;
