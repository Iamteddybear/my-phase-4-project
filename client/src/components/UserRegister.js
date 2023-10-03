import React, { useState } from 'react';

function UserRegister() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();
    console.log('User registered:', username);
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default UserRegister;
