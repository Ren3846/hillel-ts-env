import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { TTodoItem } from "../types";

export const TodoItem: React.FC<{
  todo: TTodoItem;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li>
      <div className="Todo">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
        </span>

        <FontAwesomeIcon
          className="delete-icon"
          icon={faTrash}
          onClick={() => deleteTodo(todo.id)}
        />
      </div>
    </li>
  );
};
