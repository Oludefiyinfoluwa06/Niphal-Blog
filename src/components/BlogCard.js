import React from 'react';
import { NavLink } from 'react-router-dom';

const BlogCard = ({ blog }) => {
    return (
        <div className='blog-card' key={blog._id}>
            <img src={blog.imgLink} alt={blog.title} />
            <NavLink to={`/blog/${blog._id}`}>{blog.title}</NavLink>
        </div>
    );
}

export default BlogCard;