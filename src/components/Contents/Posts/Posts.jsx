import React from 'react';
import { useGlobalContext } from '../../../context';
import './style.css';

const Posts = () => {
    const { posts } = useGlobalContext();
    return (
        <section className='posts-section'>
            <h1>My posts</h1>
            <div className='posts'>
            {posts.map((post, id) => {
                const {title, image} = post;
                return(
                    <article key={id} className='post'>
                        <div className='post-image'>
                            <img src={image} alt={title}></img>
                        </div>
                        <div className='post-title'>
                            <h2>{title}</h2>
                        </div>
                    </article>
                    )
            })}
            </div>
        </section>
    );
};

export default Posts;