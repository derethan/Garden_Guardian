//Import Pages
import Home from './views/home';
import Login from './views/login';
import ResetPassword from './views/ResetPassword';


//Site Links Array
export const siteLinks = [
    {ID: 'Home', path: '/', Name: 'Home', Component: Home,},
    {ID: 'Login', path: '/login', Name: 'Login', Component: Login,},
    {ID: 'PasswordReset', path: '/passwordReset', Name: 'Reset Password', Component: ResetPassword,},

]