import React, { useState } from "react";

export const TodoAddForm: React.FC<{ addTodo: (text: string) => void }> = ({
  addTodo,
}) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={text}
        className="todo-input"
        placeholder="What is the task today?"
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add Todo
      </button>
    </form>
  );
};
