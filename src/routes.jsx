import { lazy } from "react";

//Import Pages
const Home = lazy(() => import("./views/home"));
const About = lazy(() => import("./views/About"));

// Auth Pages
const Login = lazy(() => import("./views/login"));
const ResetPassword = lazy(() => import("./views/ResetPassword"));
const Register = lazy(() => import("./views/Register"));
// import oauthcallback from "./views/oauthcallback";

// App Pages
const Dashboard = lazy(() => import("./views/Dashboard"));
const sensors = lazy(() => import("./views/sensors"));
const Gardens = lazy(() => import("./views/Gardens"));

// import Weather from './views/Weather';
// import Schedule from './views/Schedule';

//Dynamic Routes
const Plant = lazy(() => import("./views/plant"));
const Sensor = lazy(() => import("./views/Sensor"));

// User Pages
// import Notifications from './views/Notifications';
const AccountMain = lazy(() => import("./views/AccountMain"));
// import AppSettings from './views/AppSettings';
import Logout from "./views/Logout";

// Error Pages
const Error503 = lazy(() => import("./views/Error503"));

// Icons from material UI - App Pages
import DashboardIcon from "@mui/icons-material/Dashboard";
import SensorsIcon from "@mui/icons-material/Sensors";
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import WbSunnyIcon from '@mui/icons-material/WbSunny';
import GrassIcon from "@mui/icons-material/Grass";

// Icons from material UI - User Pages
// import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
// import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
// import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LogoutIcon from "@mui/icons-material/Logout";

//Site Links For the Main Website portion (Public)
export const siteLinks = [
  // Content Pages
  { ID: "Home", path: "/", Name: "Home", Component: Home },
  { ID: "About", path: "/about", Name: "About US", Component: About },

  // User Pages
  { ID: "Login", path: "/login", Name: "Login", Component: Login },
  { ID: "Register", path: "/register", Name: "Register", Component: Register },

//   // OAuth Pages
//   {
//     ID: "oauthcallback",
//     path: "/oauthcallback",
//     Name: "oauthcallback",
//     Component: oauthcallback,
//   },

  // Account Pages
  {
    ID: "PasswordReset",
    path: "/passwordReset",
    Name: "Reset Password",
    Component: ResetPassword,
  },

  // Error Pages
  { ID: "Error503", path: "/error503", Name: "Error503", Component: Error503 },
];

// Site Links for the Private App portion (Private)
export const privateAppRoutes = [
  // App Pages
  {
    Type: "App",
    ID: "Dashboard",
    path: "/dashboard",
    Name: "Dashboard",
    icon: <DashboardIcon />,
    Component: Dashboard,
  },
  {
    Type: "App",
    ID: "Crops",
    path: "/gardens",
    Name: "Crop Management",
    icon: <GrassIcon />,
    Component: Gardens,
  },
  {
    Type: "App",
    ID: "Sensors",
    path: "/sensor",
    Name: "Sensor Dashboard",
    icon: <SensorsIcon />,
    Component: sensors,
  },
  // {Type: 'App', ID: 'Schedule', path: '/schedule', Name: 'Schedule',icon: <CalendarMonthIcon />, Component: Schedule,},
  // {Type: 'App', ID: 'Weather', path: '/weather', Name: 'Weather',icon: <WbSunnyIcon />, Component: Weather,},

  // User Pages - Notifications, My Account, Setting, Logut
  // {Type: 'User', ID: 'Notifications', path: '/notifications', Name: 'Notifications',icon: <NotificationsNoneOutlinedIcon />, Component: Notifications,},
  {
    Type: "User",
    ID: "MyAccount",
    path: "/account",
    Name: "My Account",
    icon: <ManageAccountsRoundedIcon />,
    Component: AccountMain,
  },
  // {Type: 'User', ID: 'Settings', path: '/settings', Name: 'Settings',icon: <SettingsRoundedIcon />, Component: AppSettings,},
  {
    Type: "User",
    ID: "Logout",
    path: "/logout",
    Name: "Logout",
    icon: <LogoutIcon />,
    Component: Logout,
  },

  // Dynamic Route
  {
    Type: "Dynamic",
    ID: "Plant",
    path: "gardens/plant/:plantID",
    Name: "Crop Management",
    Component: Plant,
  },
  {
    Type: "Dynamic",
    ID: "sensorData",
    path: "sensor/:sensor",
    Name: "Sensor Dashboard",
    Component: Sensor,
  },
];
