import React, { useState } from 'react';
import './App.css';

import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './models';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (event: React.FormEvent) => {
    event.preventDefault();

    if (todo) {
      const newTodo: Todo = {
        id: Date.now(),
        todo,
        isDone: false
      }

      setTodos([...todos, newTodo]);
      setTodo("");
    }
  }

  return (
    <div className="App">
      <span className="heading">Taskify</span>

      <InputField todo={todo} setTodo={setTodo} handleSubmit={handleAdd} />

      <TodoList todoList={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
