// Code: useValidate.jsx
import { useState } from "react";

export function useValidate(data) {
  // Setup Form Errors State
  const [formErrors, setErrors] = useState({});

  // Validate Form Data
  const validateForm = () => {
    const formErrors = {};

    //Validate Email
    if (!data.email) {
      formErrors.email = "Email is required";
    } else {
      // If the email is not valid
      if (!/\S+@\S+\.\S+/.test(data.email)) {
        formErrors.email = "Email address is invalid";
      }
    }

    //Validate Password
    if (!data.password) {
      formErrors.password = "Password is required";
    } else {
      // If the password is not valid
      if (data.password.length < 6) {
        formErrors.password = "Password must be at least 6 characters";
      } else {
        // If the password doesnt contain a number, a letter and a special character
        if (
          !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/.test(
            data.password
          )
        ) {
          formErrors.password =
            "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character";
        }
      }
    }

    setErrors(formErrors); // Set the form errors state

    // If the form is valid return true
    if (Object.keys(formErrors).length === 0) {
      return true;
    }
  };

  return [formErrors, validateForm]; // Return the state and the event handlers
}
