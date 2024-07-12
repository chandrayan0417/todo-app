import { useState, useEffect } from 'react';
import './App.css';
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ title: "", description: "" });

  useEffect(() => {
    fetch('http://localhost:3000/todos')
      .then(response => response.json())
      .then(data => setTodos(data.todos));
  }, []);

  const addTodo = () => {
    if (newTodo.title.trim() && newTodo.description.trim()) {
      fetch('http://localhost:3000/todo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTodo)
      })
        .then(response => response.json())
        .then(() => {
          setTodos([...todos, { ...newTodo, completed: false }]);
          setNewTodo({ title: "", description: "" });
        });
    }
  };

  const markAsComplete = (id) => {
    fetch('http://localhost:3000/completed', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    })
      .then(response => response.json())
      .then(() => {
        setTodos(todos.map(todo => todo._id === id ? { ...todo, completed: true } : todo));
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
        <CreateTodo newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
        <Todos todos={todos} markAsComplete={markAsComplete} />
      </header>
    </div>
  );
}

export default App;
