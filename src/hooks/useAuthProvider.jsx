//import Context API
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

//Create the context
const AuthContext = createContext();

//Create the provider
const AuthProvider = ({ children }) => {

    //Setup the state
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token' || ''));


    //Handle the Login using local storage until a Database can be setup (TODO)
    


    return (
        <AuthContext.Provider>
            {isLoggedIn&&children}
        </AuthContext.Provider>
    );
}

//Export the provider
export default AuthProvider;

//Create the hook
export const useAuthProvider = () => {
    return useContext(AuthContext);
}
