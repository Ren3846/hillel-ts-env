import React from "react";
import { TTodoItem } from "../types";
import { TodoItem } from "./TodoItem";

export const TodoList: React.FC<{
  todos: TTodoItem[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}> = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};
