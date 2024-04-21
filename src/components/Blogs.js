import React from 'react';
import '../styles/Blogs.sass'
import blogPic from '../img/blog.webp'

const Blogs =()=>{
    return(
        <div className="Blogs">
            <div className='container'>
                <p className="red-paragraph blogs-title-2">latest blogs</p>
                <div className='Blogs-top-part'>
                    <div className='left-part'>
                        <h1 className="title-1 Blogs-title">From blog</h1>
                    </div>
                    <button className='primary-btn'>All blogs</button>
                </div>
                <div className="Blogs-grid">
                    <div className="Single-blog">
                        <div className="picture-container">
                            <img src={blogPic} alt="#"/>
                            <p className="blog-date red-paragraph">December 08, 2020</p>
                            <div className='bottom'>
                                <div className="blog-category">lifestyle</div>
                                <div className="blog-title">Lorem ipsum dolor sit.</div>
                            </div>
                        </div>
                        <div className="content">
                            <button className='primary-btn'>read more</button>
                        </div>
                    </div>
                    <div className="Single-blog">
                        <div className="picture-container">
                            <img src={blogPic} alt="#"/>
                            <p className="blog-date red-paragraph">December 08, 2020</p>
                            <div className='bottom'>
                                <div className="blog-category">science</div>
                                <div className="blog-title">Lorem ipsum dolor sit.</div>
                            </div>
                        </div>
                        <div className="content">
                            <button className='primary-btn'>read more</button>
                        </div>
                    </div>
                    <div className="Single-blog">
                        <div className="picture-container">
                            <img src={blogPic} alt="#"/>
                            <p className="blog-date red-paragraph">December 08, 2020</p>
                            <div className='bottom'> 
                                <div className="blog-category">technology</div>
                                <div className="blog-title">Lorem ipsum dolor sit.</div>
                            </div>
                        </div>
                        <div className="content">
                            <button className='primary-btn'>read more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs