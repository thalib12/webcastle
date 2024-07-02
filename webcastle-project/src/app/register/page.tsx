"use client"

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router=useRouter()

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    
    try {

      // Here you should use the appropriate endpoint for your registration logic
      const response = await axios.post('https://dummyjson.com/users/add', {
        username,
        password,
      });


      alert("Issue with api.")
      

      // if (response.data.id) {
      //   // Save the token to localStorage or context
      //   router.push('/login');
      // }
    } catch (error) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className={"registerContainer"}>
      <form className={"registerForm"} onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className={"inputGroup"}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className={"inputGroup"}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={"inputGroup"}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p>{error}</p>}

        <button type="submit" className={"registerButton"}>Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
