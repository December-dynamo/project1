import React, { useState } from 'react';
import "./App.css";

const App = () => {
  // State for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // States for input validation
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);

  // Submit form
  const handleSubmit = () => {
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert('Form submitted successfully');
    } else {
      alert("Can't submit the form. Please check the input values.");
    }
  };

  // Validate email format
  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(email));
  };

  // Validate password length
  const validatePassword = () => {
    setPasswordValid(password.length >= 8);
  };

  // Validate confirm password match
  const validateConfirmPassword = () => {
    setConfirmPasswordValid(confirmPassword === password);
  };

  return (
    <div className='emailform'>
      <h1>Create a New Account</h1>
      <div className='int'>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={validateEmail}
          style={{  border: emailValid ? '1px solid green' : '1px solid red' }}
        />
        {!emailValid && <p>Error: Please enter a valid email address</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={validatePassword}
          style={{ border: passwordValid ? '1px solid green' : '1px solid red' }}
        />
        {!passwordValid && <p>Error: Password must be at least 8 characters long</p>}
      </div>
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          onBlur={validateConfirmPassword}
          style={{ border: confirmPasswordValid ? '1px solid green' : '1px solid red' }}
        />
        {!confirmPasswordValid && <p>Error: Passwords do not match</p>}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default App;
