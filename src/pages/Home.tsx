import React, { useState } from "react";
import { TodoAddForm } from "../components/TodoAddForm";
import "../App.css";
import { TTodoItem } from "../types";
import { TodoList } from "../components/TodoList";

export const Home: React.FC = () => {
  const [todos, setTodos] = useState<TTodoItem[]>([]);

  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const addTodo = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: prevTodos.length + 1, text: text, completed: false },
    ]);
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="TodoWrapper">
      <h1>Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      <TodoAddForm addTodo={addTodo} />
    </div>
  );
};
