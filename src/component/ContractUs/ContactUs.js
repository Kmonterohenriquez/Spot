import React, { Component } from 'react';


class ContactUs extends Component {
    state = {  }
    render() {
        return (
            <div className="ContactUs">
                <div className='container'>
                    <p>contact us</p>
                    <h1>Submit a Project</h1>
                    <form action="">
                        <label htmlFor="fullname">Full Name</label>
                        <input id="fullname" type="text" placeholder='Fullname'/>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" placeholder='123@company.com'/>
                        <label htmlFor="timeline">timeline</label>
                        <input id="timeline" type="text" placeholder='timeline'/>
                        <label htmlFor="budget">Budget</label>
                        <input type="text" placeholder='$0'/>
                        <label>I need help with...</label>
                        <input type="checkbox" />
                    </form>
                </div>
            </div>
        );
    }
}

export default ContactUs;