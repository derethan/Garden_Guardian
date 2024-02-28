import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuthProvider';

const Logout = () => {
    const { logout } = useAuth();

    useEffect(() => {
        logout();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    return;
}

export default Logout;