"use client";

import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      // Your login logic here
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Handle successful login
        console.log('Login successful!');
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('An error occurred during login.');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Нэвтрэх</h2>
        {error && <div className="error">{error}</div>}
        <div>
          <label htmlFor="email">И-мэйл хаяг:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Нууц үг:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Нэвтрэх</button>
      </form>
      <div className="links">
        <a href="/register">Бүртгүүлэх</a>
        <a href="/forgot-password">Нууц үгээ мартсан уу?</a>
      </div>
    </div>
  );
};

export default Login;
