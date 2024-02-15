import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuthProvider";
import { useEffect } from "react";

const PrivateRoute = () => {
    const {token, isLoggedIn, verifyToken} = useAuth();

    useEffect(() => {
        
        if (isLoggedIn) {
            verifyToken(token); //Send the token to the server to verify it
        }
    }, [isLoggedIn, token, verifyToken]);

    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
}

export default PrivateRoute;