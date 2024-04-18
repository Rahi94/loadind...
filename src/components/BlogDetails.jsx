import React from 'react';
import { Link, useLoaderData, useNavigate, useNavigation, useParams } from 'react-router-dom';

const BlogDetails = () => {
    const blogs = useLoaderData()
    const params = useParams()
    const blog = blogs.find(item => item.id === parseInt(params.id))
    const { id, author, title, description, key_points, image } = blog;
    console.log(blogs, params, blog)
    return (
        <div className='my-6'>
            <figure><img src={image} alt="blog-image" /></figure>
            <div className="card-body p-2 space-y-4">
                <div className='flex items-center'>
                    <img className='rounded-full w-16 h-16' src={author.image} alt="" />
                    <div className='ml-2'>
                        <p className="font-bold"> {title} </p>
                        <p className='text-sm'> by {author.name} </p>
                    </div>
                </div>
                <p> {description} </p>
                <div>
                    <p>Key Points to remember : </p>
                    {
                        key_points.map(item => <li> {item} </li>)
                    }
                </div>

            </div>
        </div>
    );
};

export default BlogDetails;