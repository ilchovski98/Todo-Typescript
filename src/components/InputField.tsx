import React, { useRef } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>,
  handleSubmit: (event: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleSubmit }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return <form className="input" onSubmit={event => {handleSubmit(event); inputRef.current?.blur();}}>
    <input
      ref={inputRef}
      type="input"
      placeholder="Enter a task"
      className="input__box"
      value={todo}
      onChange={event => setTodo(event.target.value)}
    />

    <button className="input__submit" type="submit">Go</button>
  </form>
}

export default InputField;
