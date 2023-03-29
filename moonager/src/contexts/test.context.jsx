import { createContext, useState } from 'react';

// the actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState('steve');
    const value = { currentUser, setCurrentUser };

    return  <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

