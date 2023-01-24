import React from 'react';
import './style.css';
import { useGlobalContext } from '../../../context';

const SinglePost = () => {
    const { data, functions} = useGlobalContext();
    const { title, description, image } = data.selectedPost;
    const { setSelectedPost } = functions;
    return (
        <aside className='modal-overlay'>
            <div className='modal'>
                <button onClick={() => setSelectedPost(null)}>
                    back
                </button>
                <div className='image'>
                    <img src={image} alt={title} />
                </div>
                <div className='information'>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </aside>
    );
};

export default SinglePost;