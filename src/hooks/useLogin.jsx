// Import State
import { useState } from "react";

import { useValidate } from "./useValidate";

import { useAuth } from "./useAuthProvider";

export function useLogin() {
  //Use State for the form data
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  //Setup Form Errors State
  const [formErrors, validateForm] = useValidate(loginData);
  
  
  //Handle the form data
  const handleChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  //Use the Auth Context
  const auth = useAuth();

  //Handle the form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      const Response = await auth.loginAction(loginData);
      if (Response) {
        console.log(Response);
      }
    }
  };




  //Return the state and the event handlers
  return { loginData, formErrors, handleChange, handleSubmit};
}
