import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import './CSS/LoginSignup.css';

const LoginSignUp = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [alertMessage, setAlertMessage] = useState(''); // State for alert message
  const [showAlert, setShowAlert] = useState(false); // State for alert visibility
  const navigate = useNavigate(); 

  const toggleForm = () => {
    setIsLogin(!isLogin); // Toggle between login and sign up
    setError(''); // Reset error on form switch
    setAlertMessage(''); // Reset alert message on form switch
    setShowAlert(false); // Hide alert when switching forms
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Determine URL based on login or sign up
    const url = isLogin ? 'http://localhost:3001/login' : 'http://localhost:3001/signup';
  
    // Create user data for signup, exclude name for login
    const userData = isLogin ? { email, password } : { name, email, password };

    // Log userData for debugging
    console.log('Submitting:', userData);
  
    axios.post(url, userData)
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          onLogin();
          navigate('/Shop'); // Navigate to Shop page on successful login
        } else if (!isLogin) {
          // Show success alert for signup
          setAlertMessage('Registration successful! You can now log in.');
          setShowAlert(true);
          // Optionally reset fields
          setName('');
          setEmail('');
          setPassword('');
        }
      })
      .catch((error) => {
        console.log(error);
        setError('Invalid email or password'); // Handle error on form submission
        setAlertMessage(''); // Clear alert message if there's an error
        setShowAlert(false); // Hide alert on error
      });
  };

  const handleForgotPassword = () => {
    navigate('/ForgotPassword'); // Navigate to ForgotPassword page
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>

        {/* Alert Box */}
        {showAlert && (
          <div className="alert" style={{ padding: '10px', margin: '15px 0', border: '1px solid green', color: 'green', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
            {alertMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
            {!isLogin && (
              <div>
                <input 
                  type="text" 
                  placeholder="Your name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required 
                />
              </div>
            )}
            <div>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button className="loginsignup-btn" type="submit">
            {isLogin ? 'Login' : 'Continue'}
          </button>
        </form>

        {isLogin && (
          <p
            onClick={handleForgotPassword}
            style={{ cursor: 'pointer', color: 'blue', marginTop: '10px' }}
          >
            Forgot Password?
          </p>
        )}

        <p className="loginsignup-login">
          {isLogin
            ? "Don't have an account? "
            : 'Already have an account? '}
          <span onClick={toggleForm} style={{ cursor: 'pointer', color: 'blue' }}>
            {isLogin ? 'Sign Up here' : 'Login here'}
          </span>
        </p>

        {!isLogin && (
          <div className="loginsignup-agreement">
            <input type="checkbox" id="terms" required />
            <p>By continuing, I agree to the <span>terms & policy</span>.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignUp;
