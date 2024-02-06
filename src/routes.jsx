//Import Pages
import Home from './views/home';
import Login from './views/login';
import ResetPassword from './views/ResetPassword';
import Register from './views/Register';


//Site Links Array
export const siteLinks = [

    // Content Pages
    {ID: 'Home', path: '/', Name: 'Home', Component: Home,},


    // User Pages
    {ID: 'Login', path: '/login', Name: 'Login', Component: Login,},
    {ID: 'Register', path: '/register', Name: 'Register', Component: Register,},

    



    // Account Pages
    {ID: 'PasswordReset', path: '/passwordReset', Name: 'Reset Password', Component: ResetPassword,},

]