import { useState } from 'react';
import ThemeToggle from '../components/ThemeToggle';

function Home() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTodo = () => {
    if (task.trim()) {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const deleteTodo = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Список завдань</h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Нове завдання"
        />
        <button onClick={addTodo}>Додати</button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ marginBottom: '12px' }}>
            <span>{todo}</span>
            <button
              onClick={() => deleteTodo(index)}
              style={{ marginLeft: '10px', backgroundColor: '#ff4d4f', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px' }}
            >
              Видалити
            </button>
          </li>
        ))}
      </ul>

      <ThemeToggle />
    </div>
  );
}

export default Home;
