import React from 'react';
import { useGlobalContext } from '../../../context';
import './style.css';

const Posts = () => {
    const { data, functions } = useGlobalContext();

    return (
        <section className='posts-section'>
            <h1>My posts</h1>
            <div className='posts'>
            {data.posts.map((post) => {
                const {id, title, image} = post;
                return(
                    <article key={id} className='post'>
                        <div className='post-image'>
                            <img src={image} alt={title} onClick={() => functions.selectPost(id)}/>
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