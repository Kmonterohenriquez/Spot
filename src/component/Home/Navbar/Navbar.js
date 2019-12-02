import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
	return (
		<header className='Navbar'>
            <div className='Navbar-container container'>
                <p id='logo'><i className="line-logo fas fa-grip-lines-vertical"></i>Spot</p>
                <nav>
                    <ul>
                        <li><Link to='#' id='active'>home</Link></li>
                        <li><Link to='#'>about</Link></li>
                        <li><Link to='#'>team</Link></li>
                        <li><Link to='#'>services</Link></li>
                        <li>Pages<i className='fas fa-sort-down'></i></li>
                        <li><Link to='#'>blog</Link></li>
                        <button className='primary-btn'>submit project</button>
                    </ul>
                </nav>
            </div>
		</header>
	);
}

export default Navbar