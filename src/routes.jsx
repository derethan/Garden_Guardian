//Import Pages
import Home from './views/home';
import About from './views/About';

// Auth Pages
import Login from './views/login';
import ResetPassword from './views/ResetPassword';
import Register from './views/Register';
import oauthcallback from './views/oauthcallback';

// App Pages
import Dashboard from './views/Dashboard';
import sensors from './views/sensors';
import Gardens from './views/Gardens';
import Weather from './views/Weather';
import Schedule from './views/Schedule';

//Dynamic Routes
import { Plant } from './views/$plant';
import  SensorData  from './views/$SensorData';

// User Pages
import Notifications from './views/Notifications';
import AccountMain from './views/AccountMain';
import AppSettings from './views/AppSettings';
import Logout from './views/Logout';

// Error Pages
import Error503 from './views/Error503';

// Icons from material UI - App Pages
import DashboardIcon from '@mui/icons-material/Dashboard';
import SensorsIcon from '@mui/icons-material/Sensors';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import GrassIcon from '@mui/icons-material/Grass';

// Icons from material UI - User Pages
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
// import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LogoutIcon from '@mui/icons-material/Logout';



//Site Links For the Main Website portion (Public)
export const siteLinks = [

    // Content Pages
    {ID: 'Home', path: '/', Name: 'Home', Component: Home,},
    {ID: 'About', path: '/about', Name: 'About US', Component: About,},

    // User Pages
    {ID: 'Login', path: '/login', Name: 'Login', Component: Login,},
    {ID: 'Register', path: '/register', Name: 'Register', Component: Register,},

    // OAuth Pages
    {ID: 'oauthcallback', path: '/oauthcallback', Name: 'oauthcallback', Component: oauthcallback,},

    // Account Pages
    {ID: 'PasswordReset', path: '/passwordReset', Name: 'Reset Password', Component: ResetPassword,},

    // Error Pages
    {ID: 'Error503', path: '/error503', Name: 'Error503', Component: Error503,},

]

// Site Links for the Private App portion (Private)
export const privateAppRoutes = [

    // App Pages
    {Type: 'App', ID: 'Dashboard', path: '/dashboard', Name: 'Dashboard',icon: <DashboardIcon /> , Component: Dashboard,},
    {Type: 'App', ID: 'Crops', path: '/gardens', Name: 'Crop Management',icon: <GrassIcon />, Component: Gardens,},
    {Type: 'App', ID: 'Sensors', path: '/sensor', Name: 'Sensor Dashboard',icon: <SensorsIcon /> , Component: sensors,},
    // {Type: 'App', ID: 'Schedule', path: '/schedule', Name: 'Schedule',icon: <CalendarMonthIcon />, Component: Schedule,},
    // {Type: 'App', ID: 'Weather', path: '/weather', Name: 'Weather',icon: <WbSunnyIcon />, Component: Weather,},

    // User Pages - Notifications, My Account, Setting, Logut
    // {Type: 'User', ID: 'Notifications', path: '/notifications', Name: 'Notifications',icon: <NotificationsNoneOutlinedIcon />, Component: Notifications,},
    {Type: 'User', ID: 'MyAccount', path: '/account', Name: 'My Account',icon: <ManageAccountsRoundedIcon />, Component: AccountMain,},
    // {Type: 'User', ID: 'Settings', path: '/settings', Name: 'Settings',icon: <SettingsRoundedIcon />, Component: AppSettings,},
    {Type: 'User', ID: 'Logout', path: '/logout', Name: 'Logout',icon: <LogoutIcon />, Component: Logout,},

    // Dynamic Route
    {Type: 'Dynamic', ID: 'Plant', path: 'gardens/plant/:plantID', Name: 'Crop Management', Component: Plant,},
    {Type: 'Dynamic', ID: 'sensorData', path: 'sensor/:sensor', Name: 'Sensor Dashboard', Component: SensorData,},
]