import React, { Component } from 'react';
import './ContactUs.css'

class ContactUs extends Component {
    state = {  }
    render() {
        return (
            // 54D-2
            <section className="ContactUs">
                <div className='ContactUs-container container'>
                    <p>contact us</p>
                    <h1>Submit a Project</h1>
                    <form>
                       <div>
                            <label htmlFor="fullname">Full Name</label>
                            {/* 54G */}
                            <input id="fullname" type="text" placeholder='Fullname' aria-label="FullName"/>
                       </div>
                       <div>
                            <label htmlFor="email">Email</label>
                            {/* 59C */}
                            <input id="email" type="email" placeholder='123@company.com' aria-label="email"/>
                       </div>
                        <div>
                            <label htmlFor="timeline">timeline</label>
                            <input id="timeline" type="text" placeholder='timeline' aria-label="timeline"/>
                        </div>
                        <div>
                            <label htmlFor="budget">Budget</label>
                            <input type="number" placeholder='$0' aria-label="Budget"/>
                        </div>

                        <div>
                            <textarea name="" id="" cols="30" rows="6" placeholder='Please write some details about your request...'></textarea>
                            
                        </div></form>
                </div>
            </section>
        );
    }
}

export default ContactUs;