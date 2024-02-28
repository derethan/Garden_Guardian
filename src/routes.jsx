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

    // Content PagesAdded Dashboard Containe

// Export the private routes
export const privateRoutes = [

    // Account Pages
    {ID: 'Dashboard', path: '/dashboard', Name: 'Dashboard', Component: Dashboard,},
    {ID: 'Sensors', path: '/sensors', Name: 'Sensors', Component: sensors,},


]