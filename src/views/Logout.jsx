import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuthProvider';

import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();

    useEffect(() => {
        logout();
        navigate("/login");
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    return;
}

export default Logout;