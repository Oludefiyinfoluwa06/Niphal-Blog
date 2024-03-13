import React from 'react';
import { Link } from 'react-router-dom';
import emptyBlog from '../images/empty_blog.png';

const NoBlogs = () => {
    return (
        <div className='empty-blog'>
            <img src={emptyBlog} alt="Empty blog" />
            <p>You have not created any blog, <Link to='/add'>Start here</Link></p>
        </div>
    );
}

export default NoBlogs;