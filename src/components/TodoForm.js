import { useState, useEffect, useRef } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        value={input}
        ref={inputRef}
        className="todoInput"
        onChange={handleChange}
        placeholder="Add a Todo"
      />
      <button className="todoBtn" onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
