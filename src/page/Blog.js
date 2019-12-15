import React from 'react'
import Blogs from '../component/Blogs/Blogs';
import ContactLine from '../component/ContactLine/ContactLine';
import OurLocation from '../component/OurLocation/OurLocation';

const Blog=()=>{
    return (
        <div className="Blog">
            <Blogs/>
            <ContactLine />
            <OurLocation />

        </div>
    )
}

export default Blog