import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../models'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';

import './styles.css';

interface Props {
  todo: Todo;
  todoList: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, todoList, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (todoId: number) => {
    setTodos(todoList.map(currentTodo => currentTodo.id === todoId ? { ...currentTodo, isDone: !currentTodo.isDone } : currentTodo));
  }

  const handleDelete = (todoId: number) => {
    setTodos(todoList.filter(currentTodo => currentTodo.id !== todoId));
  }

  const handleEdit = (event: React.FormEvent, id: number) => {
    event.preventDefault();

    setTodos(todoList.map(todo => {
      return todo.id === id ? {...todo, todo: editTodo} : todo;
    }));

    setEdit(false);
  }

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form className="todos__single" onSubmit={event => handleEdit(event, todo.id)}>
      {
        edit ? (<input ref={inputRef} value={editTodo} onChange={event => setEditTodo(event.target.value)} className="todos__single--text" />) : todo.isDone ? (
          <s className="todos__single--text">{todo.todo}</s>
        ) : (
          <span className="todos__single--text">{todo.todo}</span>
        )
      }

      <div>
        <span className="icon" onClick={event => {
          if (!edit && !todo.isDone) {
            setEdit(!edit);
          } else {
            handleEdit(event, todo.id);
          }
        }}>
          <AiFillEdit />
        </span>

        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>

        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  )
}

export default SingleTodo
