import { createContext } from 'react';

const UserContext = createContext();

export default UserContext;

/* import UserContext
    UserContext.Provider on all routes that you want to handle the context
    import in the children
    useContext hook and the imported UserContext
    const contextData = useContext(UserContext);
*/
