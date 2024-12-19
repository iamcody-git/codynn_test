import React from "react";
import Form from "../Form/Form";
import axios from "axios";
import http from '../../Http/Http'

const Login = () => {
  
  const handleLogin = async (data) => {
    try {
      const response = await axios.post(
        `${baseURL}/login`,
        data
      );
    } catch (error) {
        console.log('Failed to login')
      
    }
  };
  return (
    <>
      <Form type="Login" onSubmit={handleLogin} />
    </>
  );
};

export default Login;