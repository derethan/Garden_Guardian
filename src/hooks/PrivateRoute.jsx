import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuthProvider";
import { useEffect } from "react";

const PrivateRoute = () => {
    const {token, isLoggedIn, verifyToken} = useAuth();

    //Check if the user is logged in and if so, verify the token
    useEffect(() => {
        
        if (isLoggedIn) {
            verifyToken(token); //Send the token to the server to verify it
        }
    }, []);// eslint-disable-line react-hooks/exhaustive-deps


    //If the user is not logged in or the token is invalid, redirect to the login page
    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }

    //If the user is logged in and the token is valid, render the protected route
    return <Outlet />;
}

export default PrivateRoute;