// Import State
import { useState } from "react";

import { useValidate } from "./useValidate";

export function useLogin() {
  //Use State for the form data
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  //Setup Form Errors State
  const [formErrors, validateForm] = useValidate(loginData);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  
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

    if (validateForm()) {
      // Submit form
      login();
      console.log("Form Submitted", loginData);
    }
  };


  // Handle the Login using local storage until a Database can be setup (TODO)
  const login = () => {

    if (loginData.email === "apatterson93@gmail.com" && loginData.password === "G74sxah!") {
      // Set the logged in state
      localStorage.setItem('token', '1234567890');
      setIsLoggedIn(true);
    } else {
      // Set the form error
      alert('Invalid credentials');
      

    }

  };

  // Handle the Logout
  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  }

  //Return the state and the event handlers
  return { loginData, formErrors, handleChange, handleSubmit, isLoggedIn, logout};
}
