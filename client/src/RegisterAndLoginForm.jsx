import {useContext, useState} from "react";
import axios from "axios";
import {UserContext} from "./UserContext.jsx";

export default function RegisterAndLoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginOrRegister, setIsLoginOrRegister] = useState('login');
  const {setUsername:setLoggedInUsername, setId} = useContext(UserContext);
  async function handleSubmit(ev) {
    ev.preventDefault();
    const url = isLoginOrRegister === 'register' ? 'register' : 'login';
    const {data} = await axios.post(url, {username,password});
    setLoggedInUsername(username);
    setId(data.id);
  }
  return (
<div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(rgb(128, 128, 128), rgb(2 69 84))' }}>
  <form className="bg-white shadow-md rounded-md p-8 w-72 mx-auto" onSubmit={handleSubmit}>
    <h2 className="text-2xl font-bold mb-4 text-center">Welcome</h2>
    <input 
      value={username}
      onChange={ev => setUsername(ev.target.value)}
      type="text"
      placeholder="Username"
      className="block w-full rounded-md p-2 mb-4 border focus:outline-none focus:border-blue-500"
    />
    <input 
      value={password}
      onChange={ev => setPassword(ev.target.value)}
      type="password"
      placeholder="Password"
      className="block w-full rounded-md p-2 mb-4 border focus:outline-none focus:border-blue-500"
    />
    <button 
      type="submit" 
      className="bg-blue-500 text-white block w-full rounded-md p-2 mb-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
    >
      {isLoginOrRegister === 'register' ? 'Register' : 'Login'}
    </button>
    <div className="text-center">
      {isLoginOrRegister === 'register' ? (
        <p>
          Already have an account? 
          <button 
            className="text-blue-500 ml-1 focus:outline-none hover:underline"
            onClick={() => setIsLoginOrRegister('login')}
          >
            Login here
          </button>
        </p>
      ) : (
        <p>
          Don't have an account? 
          <button 
            className="text-blue-500 ml-1 focus:outline-none hover:underline"
            onClick={() => setIsLoginOrRegister('register')}
          >
            Register
          </button>
        </p>
      )}
    </div>
  </form>
</div>

  );
}