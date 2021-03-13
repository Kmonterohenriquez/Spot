import React from 'react'
import Blogs from '../components//Blogs';
import ContactLine from '../components/ContactLine';
import OurLocation from '../components/OurLocation';
import PageTitle from '../components/PageTitle'

const Blog=()=>{
    return (
        <div className="Blog">
            <PageTitle title='Blogs'/>
            <Blogs/>
            <ContactLine />
            <OurLocation />

        </div>
    )
}

export default Blog