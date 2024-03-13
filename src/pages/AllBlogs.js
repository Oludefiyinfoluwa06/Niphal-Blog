import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from '../components/BlogCard';
import Loading from '../components/Loading';
import NoBlogs from '../components/NoBlogs';

const AllBlogs = ({ server_url }) => {
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(`${server_url}/api/blogs/all`)
            .then(res => {
                setBlogs(res.data.blogs);
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => setIsLoading(false));
    }, [server_url]);

    return (
        <div className='blog-content'>
            {isLoading ? (
                <Loading />
            ) : (
                <div className="blogs">
                    {blogs.length === 0 ? (
                        <NoBlogs />
                    ) : (
                        blogs.map(blog => (
                            <BlogCard blog={blog} />
                        ))
                    )}
                </div>
            )}
        </div>
    );
}

export default AllBlogs;