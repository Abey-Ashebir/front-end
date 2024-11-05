import React, { useState } from 'react';
import axios from 'axios';
import './ForgotPassword.css'; // Corrected CSS import

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); // State for success/error messages

  const handlePasswordReset = () => {
    if (email) {
      // Send a request to the backend to handle password reset
      axios.post('http://localhost:3001/reset-password', { email })
        .then((response) => {
          setMessage(`Password reset link sent to ${email}.`); // Success message
          setEmail(''); // Reset the email field after the action
        })
        .catch((error) => {
          console.error(error);
          setMessage('Error sending password reset link. Please try again.'); // Error message
        });
    } else {
      setMessage('Please enter your email address.');
    }
  };

  return (
    <div className='forgotpassword'>
      <div className="forgotpassword-container">
        <h1>Forgot Password</h1>
        <div className="forgotpassword-fields">
          <div>
            <input
              type="email"
              placeholder='Enter your email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required // Ensures the field is filled before submitting
            />
          </div>
        </div>
        <button className="forgotpassword-btn" onClick={handlePasswordReset}>
          Send Password Reset Link
        </button>
        {message && <p style={{ color: message.includes('Error') ? 'red' : 'green' }}>{message}</p>} {/* Message display */}
      </div>
    </div>
  );
};

export default ForgotPassword;
