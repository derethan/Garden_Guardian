//Import Pages
import Home from './views/home';
import Login from './views/login';
import ResetPassword from './views/ResetPassword';
import Register from './views/Register';
import oauthcallback from './views/oauthcallback';
import Dashboard from './views/Dashboard';
import sensors from './views/sensors';


//Site Links Array
export const siteLinks = [

    // Content Pages
    {ID: 'Home', path: '/', Name: 'Home', Component: Home,},


    // User Pages
    {ID: 'Login', path: '/login', Name: 'Login', Component: Login,},
    {ID: 'Register', path: '/register', Name: 'Register', Component: Register,},

    // OAuth Pages
    {ID: 'oauthcallback', path: '/oauthcallback', Name: 'oauthcallback', Component: oauthcallback,},


    // Account Pages
    {ID: 'PasswordReset', path: '/passwordReset', Name: 'Reset Password', Component: ResetPassword,},

]

// Export the private routes
export const privateRoutes = [

    // Account Pages
    {ID: 'Dashboard', path: '/dashboard', Name: 'Dashboard', Component: Dashboard,},
    {ID: 'Sensors', path: '/sensors', Name: 'Sensors', Component: sensors,},


]