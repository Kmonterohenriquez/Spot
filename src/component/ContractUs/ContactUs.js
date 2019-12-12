import React, { Component } from 'react';
import './ContactUs.css'

class ContactUs extends Component {
    state = {  }
    render() {
        return (
            <div className="ContactUs">
                <div className='container'>
                    <p>contact us</p>
                    <h1>Submit a Project</h1>
                    <form action="">
                        <label htmlFor="fullname">Full Name</label><br/>
                        <input id="fullname" type="text" placeholder='Fullname'/><br/>
                        <label htmlFor="email">Email</label><br/>
                        <input id="email" type="email" placeholder='123@company.com'/><br/>
                        <label htmlFor="timeline">timeline</label><br/>
                        <input id="timeline" type="text" placeholder='timeline'/><br/>
                        <label htmlFor="budget">Budget</label><br/>
                        <input type="text" placeholder='$0'/><br/>
                        <label>I need help with...</label><br/>
                        <input type="checkbox" /><br/>
                    </form>
                </div>
            </div>
        );
    }
}

export default ContactUs;