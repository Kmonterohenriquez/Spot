import React from 'react';
import '../styles/Upperline.sass'

export default function Upperline() {
	return (
		<div className='Upperline'>
            <div className='Upperline-container container'>
                <p>Here’s a handy notice bar to bring attention to new features.</p>
                <div className="social-media">
                    <a href='/'><div className="circle"><i className="fab fa-facebook-f"></i></div></a>
                    <a href='/'><div className="circle"><i className="fab fa-instagram"></i></div></a>
                    <a href='https://www.linkedin.com/in/kevin-montero/'><div className="circle"><i className="fab fa-linkedin-in"></i></div></a>
                </div>
            </div>
		</div>
	);
}
