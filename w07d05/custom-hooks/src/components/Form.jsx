import useInput from "../hooks/useInput";

const Form = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  const usernameInput = useInput('');
  const passwordInput = useInput('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`you are logging in with ${usernameInput.value} and ${passwordInput.value}`);
  };

  return (
    <div>
      <h2>This is the Form component</h2>

      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input 
          value={usernameInput.value}
          onChange={usernameInput.onChange}
        />
        <br/>
        <label>Password</label>
        <input 
          // value={password}
          // onChange={(event) => setPassword(event.target.value)}
          { ...passwordInput }
        />
        <br/>
        <button type="submit">Login!</button>
      </form>
    </div>
  );
};

export default Form;
