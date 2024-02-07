// Import State
import { useState } from 'react';

function useLogin() {
    
  //Use State for the form data
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  //Handle the form data
  const handleChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  //Handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Login data: ", loginData);
  };

  //Return the state and the event handlers
  return { loginData, handleChange, handleSubmit };

}

export default useLogin;