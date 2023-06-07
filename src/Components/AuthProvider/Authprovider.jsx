import { createContext } from "react";


export const AuthContext = createContext(null)

const Authprovider = ({children}) => {

    const user = {name: 'tusher'}

    const authInfo = {
        user
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;