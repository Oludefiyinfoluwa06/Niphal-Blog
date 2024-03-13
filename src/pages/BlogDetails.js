import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../components/Loading';

const BlogDetails = ({ server_url }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [blogDetails, setBlogDetails] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`${server_url}/api/blogs/${id}`)
            .then(res => {
                console.log(res);
                setBlogDetails(res.data.blog);
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => setIsLoading(false));
    }, [id, server_url]);

    const createdAt = new Date(blogDetails.createdAt);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = createdAt.toLocaleDateString('en-US', options);

    return (
        <div>
            {isLoading ? (
                <Loading />
            ) : (
                <div className="blog-details">
                    <img src={blogDetails.imgLink} alt={blogDetails.title} />
                    <div className="blog-header">
                        <h1>{blogDetails.title}</h1>
                        <p>{formattedDate}</p>
                    </div>
                    <div className="blog-detail-content" dangerouslySetInnerHTML={{__html: blogDetails.blogContent}}></div>
                </div>
            )}
        </div>
    );
}

export default BlogDetails;