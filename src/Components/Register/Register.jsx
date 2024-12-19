import React from "react";
import Form from '../Form/Form'


const Register = () => {
  const handleRegister = async (data) => {
    try {
      const response = await axios.post(
        `${baseURL}/register`,
        data
      );
    } catch (error) {
      console.log('Error in registration')
    }
  };

  return (
    <>
      <Form type="Register" onSubmit={handleRegister} />
    </>
  );
};

export default Register;