import React from 'react';
import { IMAGES } from '../../constans';
import AboutMe from './AboutMe/AboutMe';
import './style.css';

const Contents = () => {
    return (
        <section className='contents'>
            <div className='image'>
                <img src={'pexels-carlos-oliva-3586966.jpg'} alt={IMAGES.mainImageTitle} disabled />
                <AboutMe />
            </div>
            
        </section>
    );
};

export default Contents;