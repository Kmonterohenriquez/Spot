import React from 'react';
import './ContactLine.css'

const ContactLine = () => {
	return (
		<div className='ContactLine'>
			<div className='container ContactLine-grid '>
				<div className='ContactLine-left-side'>
					<p id='text-1'>do you have any project in mind</p>
					<p id='text-2'>BRAND IDENTITY AND UX DESIGN AGENCY</p>
				</div>
				<div className='ContactLine-right-side'>
					<button className='secondary-btn'>contact us</button>
					<a href='tel:1-400-600-0000'>
						<i className='fas fa-phone-alt'></i> +1 400 600 0000
					</a>
				</div>
			</div>
		</div>
	);
};

export default ContactLine;
