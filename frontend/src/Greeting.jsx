import { useState } from 'react';
import './style.css';

function GreetingApp() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const fetchGreeting = async () => {
    if (!name) {
      setMessage("Name is required!");
      return;
    }
    try {
      const response = await fetch(`/api/greet?name=${name}`);
      const data = await response.json();
      setMessage(data.message || data.error);
    }
    catch{
      setMessage("error fetching greeting.");
    }
  };

  return (
        <div className='container'>    
            <h2>Greeting App</h2>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name" 
            />
            <button onClick={fetchGreeting}>Get Greeting</button>
            <p>{message}</p>
        </div>   
  );
}

export default GreetingApp;