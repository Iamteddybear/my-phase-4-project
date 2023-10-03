import React, { useState } from 'react';

function UserLogin({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    const successfulLogin = onLogin(username, password);
    
    if (successfulLogin) {
      setUsername('');
      setPassword('');
      setLoginError('');
    } else {
      setLoginError('Invalid username or password.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {loginError && <p style={{ color: 'red' }}>{loginError}</p>} {/* Display error if present */}
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default UserLogin;
