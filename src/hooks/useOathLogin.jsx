// Import necessary libraries
// import { useNavigate } from 'react-router-dom';

export function useOathLogin() {
    // const navigate = useNavigate();

    const clientID = '315535553589-3fjr46qfkmjro5l8kvu1feirsj25eqne.apps.googleusercontent.com'
    const redirectURI = 'http://127.0.0.1:5173/oauthcallback'
    
    const handleGoogleLogin = () => {
  
      // Redirect the user to Google's OAuth page.
      window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientID}&redirect_uri=${encodeURIComponent(redirectURI)}&response_type=token&scope=email%20profile`;
    };

    return { handleGoogleLogin };
}