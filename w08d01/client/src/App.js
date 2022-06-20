import './App.css';
import TodoList from './components/TodoList';
import {useState, useEffect} from 'react';
import axios from 'axios';

const todoArr = [
  {
    id: 'acbkasjd',
    task: 'stare at the ceiling'
  },
  {
    id: 'gghasdfasd',
    task: 'ice my wrist'
  },
  {
    id: 'aerqwer',
    task: 'talk to the rubber duck'
  },
];

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('/api/todos')
      .then((response) => {
        setTodos(response.data);
      });
  }, []);

  return (
    <div className="App">
      <h2>The best app in the world!!!</h2>
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
