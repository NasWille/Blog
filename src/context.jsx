import React, {useContext, useState} from 'react';
import { POSTS } from './constans';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [posts, setPosts] = useState( POSTS );
    const [selectedPost, setSelectedPost] = useState(null);

    const data = {
        posts, 
        selectedPost
    };

    const selectPost = (id) => {
        const post = posts.find((item) => item.id === id);
        setSelectedPost(post);
    }

    const functions = {
        setPosts,
        setSelectedPost,
        selectPost
    }


    return ( 
        <AppContext.Provider value={{ data, functions }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}


export default { AppContext, AppProvider}