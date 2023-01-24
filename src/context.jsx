import React, {useContext, useState} from 'react';
import { POSTS } from './constans';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [posts, setPosts] = useState( POSTS );

    return ( 
        <AppContext.Provider value={{ posts }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}


export default { AppContext, AppProvider}