import React from 'react';

import Team from '../components/Team';
import Brands from '../components/Brands';
import ContactLine from '../components/ContactLine';
import OurLocation from '../components/OurLocation';

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
