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
      console.log("Form Submitted", loginData);
    }
  };

  //Return the state and the event handlers
  return { loginData, formErrors, handleChange, handleSubmit };
}
