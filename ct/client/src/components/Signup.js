// src/components/Signup.js
import { useState } from 'react';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({});

const validate = () => {
  const newErrors = {};
  if (!email.includes('@')) newErrors.email = 'Invalid email';
  if (password.length < 6) newErrors.password = 'Password too short';
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });

      const data = await response.json();
      alert('সাইনআপ সফল! টোকেন: ' + data.token);
    } catch (error) {
      alert('সাইনআপ ব্যর্থ: ' + error.message);
    }
  };

  return (
    <div>
      <h2>সাইন আপ ফর্ম</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ইমেইল"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="পাসওয়ার্ড"
          required
        />
        <button type="submit">Register Now</button>
      </form>
    </div>
  );
}