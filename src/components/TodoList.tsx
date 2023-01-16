import React from "react";
import { Todo } from "../models";
import SingleTodo from "./SingleTodo";
import "./styles.css";

interface Props {
  todoList: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todoList, setTodos }: Props) => {
  return <div className="todos">
    {todoList.map((todo, index) => {
      return <SingleTodo key={todo.id} todo={todo} todoList={todoList} setTodos={setTodos} />;
    })}
  </div>
}

export default TodoList;
