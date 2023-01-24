import React from 'react';
import { IMAGES } from '../../constans';
import AboutMe from './AboutMe/AboutMe';
import Posts from './Posts/Posts';
import SinglePost from './SinglePost/SinglePost';
import './style.css';
import { useGlobalContext } from '../../context';

const Contents = () => {
    const { data } = useGlobalContext();
    const { selectedPost } = data;
    return (
        <section className='contents'>
            <div className='image'>
                <img src={'pexels-carlos-oliva-3586966.jpg'} alt={IMAGES.mainImageTitle} disabled />
                <AboutMe />
            </div>
            <Posts />
            {selectedPost &&<SinglePost />}
        </section>
    );
};

export default Contents;