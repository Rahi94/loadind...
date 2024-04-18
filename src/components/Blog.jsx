import  { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from './AuthProvider';

const Blog = () => {
    const [blogPost, setBlogPost] = useState([])
    const {loading, setLoading} = useContext(authContext)
    
    
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogPost(data))
        setLoading(false)
    }, [])

    return (
        <div>
            {
                loading ? <span className="loading loading-dots loading-lg"></span>
                    :
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12 ml-6'>
                        {
                            blogPost.map(blog => <div key={blog.id} className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={blog.image} alt="Shoes" /></figure>
                                <div className="card-body p-2 space-y-4">
                                    <div className='flex items-center justify-between'>
                                        <img className='rounded-full w-16 h-16' src={blog.author.image} alt="" />
                                        <div className='ml-2'>
                                            <p className="font-bold"> {blog.title} </p>
                                            <p className='text-sm'> by {blog.author.name} </p>
                                        </div>
                                    </div>
                                    <p> {blog.description.slice(0, 90)}.... </p>
                                    <div className="card-actions justify-center">
                                        <Link to={`/blogs/${blog.id}`} className="btn btn-primary">Want To Read</Link>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
            }
        </div>
    );
};

export default Blog;