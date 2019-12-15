import React, { Component } from 'react';
import './ContactUs.css'

class ContactUs extends Component {
    state = {  }
    render() {
        return (
            <div className="ContactUs">
                <div className='ContactUs-container container'>
                    <p>contact us</p>
                    <h1>Submit a Project</h1>
                    <form>
                       <div>
                            <label htmlFor="fullname">Full Name</label>
                            <input id="fullname" type="text" placeholder='Fullname'/>
                       </div>
                       <div>
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" placeholder='123@company.com'/>
                       </div>
                        <div>
                            <label htmlFor="timeline">timeline</label>
                            <input id="timeline" type="text" placeholder='timeline'/>
                        </div>
                        <div>
                            <label htmlFor="budget">Budget</label>
                            <input type="number" placeholder='$0'/>
                        </div>

                        <div>
                            <textarea name="" id="" cols="30" rows="6" placeholder='Please write some details about your request...'></textarea>
                            
                        </div></form>
                </div>
            </div>
        );
    }
}

export default ContactUs;