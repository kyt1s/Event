import { useState } from "react"
const Login=()=> {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Send a request to the server to authenticate the user
      fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Login successful, redirect to dashboard or home page
          window.location.href = '/dashboard';
        } else {
          // Display error message
          setError(data.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
    };
  
    return (
      <div >
        <div >
        <h2>Login</h2>
        <form onSubmit={handleSubmit} >
          <label>
            Username:
            <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          </label>
          <br />
          <button type="submit">Login</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
        </div>
      </div>
    );
  }
  
  export default Login;
  
  
  