import React, { useState } from 'react';
import '../styles/Navbar.sass'
import { Link } from 'react-router-dom'
function Navbar() {
    const [menuToggle, setMenuToggle] = useState(false);
    console.clear()
    console.log("menu btn's value:", menuToggle)
	return (
		<header className='Navbar'>
            <div className='Navbar-container container'>
                <Link to='/'><p id='logo'><i className="line-logo fas fa-grip-lines-vertical"></i>Spot</p></Link>
                {menuToggle ? (
                <nav className='sm-menu'>
                    <ul>
                        {/* 54H */}
                        <li><Link onClick={()=>setMenuToggle(!menuToggle)} to='/' id='active'>home</Link></li>
                        <li><Link onClick={()=>setMenuToggle(!menuToggle)} to='/about'>about</Link></li>
                        <li><Link onClick={()=>setMenuToggle(!menuToggle)} to='/team'>team</Link></li>
                        <li><Link onClick={()=>setMenuToggle(!menuToggle)} to='/services'>services</Link></li>
                        <li>Pages<i className='fas fa-sort-down'></i></li>
                        <li><Link onClick={()=>setMenuToggle(!menuToggle)} to='/blog'>blog</Link></li>
                        <button className='primary-btn'>submit project</button>
                    </ul>
                </nav>):(
                <nav className='lg-menu'>
                    <ul>
                        {/* 54H */}
                        <li><Link to='/' id='active'>home</Link></li>
                        <li><Link to='/about'>about</Link></li>
                        <li><Link to='/team'>team</Link></li>
                        <li><Link to='/services'>services</Link></li>
                        <li>Pages<i className='fas fa-sort-down'></i></li>
                        <li><Link to='/blog'>blog</Link></li>
                        <button className='primary-btn'>submit project</button>
                    </ul>
                </nav>)}
                <i onClick={()=>setMenuToggle(!menuToggle)}className="menu-icon fas fa-ellipsis-h"></i>
            </div>
		</header>
	);
}

export default Navbar