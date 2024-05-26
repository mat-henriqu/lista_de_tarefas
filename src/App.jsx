import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './assets/styles/app.css';
import './assets/styles/todo.css';
import './assets/styles/todo-form.css';
import './assets/styles/search.css';
import './assets/styles/filter.css';

import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';

let nextId = 4;

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [
      {
        id: 1,
        text: "Ir pra academia",
        category: "Pessoal",
        isCompleted: false,
      }
    ];
  });

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('Asc');

  useEffect(() => {
    const maxId = todos.reduce((max, todo) => (todo.id > max ? todo.id : max), 0);
    nextId = maxId + 1;
  }, [todos]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: nextId,
        text,
        category,
        isCompleted: false,
      },
    ];

    setTodos(newTodos);
    nextId += 1;
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className='app-content'>
        <h1>Lista de tarefas</h1>
        <h2>Filtrar:</h2>
        <br />
        <Search search={search} setSearch={setSearch} />
        <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
        <hr />
        <br />
        <h2>Tarefas:</h2>
        <div className='todo-list'>
          {todos
            .filter((todo) =>
              filter === "All"
                ? true
                : filter === "Completed"
                  ? todo.isCompleted
                  : !todo.isCompleted)
            .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
            .sort((a, b) => sort === "Asc"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text))
            .map((todo) => (
              <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
            ))}
        </div>
        <hr />
        <br />
        <TodoForm addTodo={addTodo} />
        <ToastContainer
          position="bottom-center"
          theme="dark"
          autoClose={800}
        />
      </div>
    </div>
  );
}

export default App;
