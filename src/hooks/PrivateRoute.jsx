import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuthProvider";

const PrivateRoute = () => {
    const user = useAuth();

    if (!user.token) {
        return <Navigate to="/login" />;
    }
    return <Outlet />;
}

export default PrivateRoute;