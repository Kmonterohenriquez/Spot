import React from 'react'
import Blogs from '../component/Blogs/Blogs';
import ContactLine from '../component/ContactLine/ContactLine';
import OurLocation from '../component/OurLocation/OurLocation';
import PageTitle from '../component/PageTitle/PageTitle'

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