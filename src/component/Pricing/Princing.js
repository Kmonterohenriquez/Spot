import React from 'react';
import './Pricing.css'

const Pricing = () => {
	return (
		<div className='Pricing'>
			<div className='Pricing container container'>

				<div className='Pricing-top-part'>
					<p className='Pricing-phrase red-paragraph '>
						Best prices on the market
					</p>
					<p className='Pricing-title title-1'>Our pricing</p>
					<p className='Pricing-description grey-text'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
						saepe, culpa consectetur
						accusamus illo soluta dolorem corporis officia laboriosam et
						voluptatum recusandae fuga neque! Vero, quos!
					</p>
				</div>
				<div className='Pricing-grid'>
					<div className='price-info'>
						<p className='price-info-title red-paragraph'>Basic</p>
						<img src="https://assets.website-files.com/5dcc0b70294b8865063dcae6/5dceb736646791ae20a144dd_icons8-web.svg" alt="basic plan"/>
						
						<p className='price'><span className='red-paragraph'>$</span> 990</p>
						<li>Lorem ipsum dolor sit amet.</li>
						<li>Lorem ipsum dolor sit </li>
						<li>Lorem ipsum dolor sit amet.</li>
						<li className='test'>Lorem ipsum dolor sit amet.</li>
						<li>Lorem ipsum dolor sit amet.</li>
						<li>Lorem ipsum dolor sit amet.</li>
						<button className='primary-btn'>Choose Plan</button>
						
					</div>
					<div className='price-info'>
						<p className='price-info-title red-paragraph'>pro</p>
						<img src="https://assets.website-files.com/5dcc0b70294b8865063dcae6/5dd40fa94356623e4d849139_icons8-web-design%20(4).svg" alt="standard plan"/>
						<p className='price'><span className='red-paragraph'>$</span> 1300</p>
						<li>Lorem ipsum </li>
						<li>Lorem ipsum dolor sit amet.</li>
						<li>Lorem ipsum dolor sit amet.</li>
						<li>Lorem ipsum dolor </li>
						<li>Lorem ipsum dolor sit amet.</li>
						<li>Lorem ipsum dolor </li>
						<button className='secondary-btn'>Choose Plan</button>
						
					</div>
					<div className='price-info'>
						<p className='price-info-title red-paragraph'>ultimate</p>
						<img src="https://assets.website-files.com/5dcc0b70294b8865063dcae6/5dd4110c22bee1cedb4a65ab_icons8-responsive%20(1).svg" alt="premium plan"/>
						<p className='price'><span className='red-paragraph'>$</span> 1700</p>
						<li>Lorem ipsum dolor sit amet.</li>
						<li>Lorem ipsum dolor sit amet.</li>
						<li>Lorem ipsum dolor sit amet.</li>
						<li>Lorem ipsum dolor sit amet.</li>
						<li>Lorem ipsum dolor sit amet.</li>
						<li>Lorem ipsum dolor sit amet.</li>
						<button className='primary-btn'>Choose Plan</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pricing;
