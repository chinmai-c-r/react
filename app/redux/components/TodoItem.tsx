"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo, updateTodo } from "../store/todoSlice";
import type { Todo } from "../store/todoSlice";

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.title);
  const dispatch = useDispatch();

  const handleSaveEdit = () => {
    if (editValue.trim()) {
      dispatch(updateTodo({ id: todo.id, title: editValue.trim() }));
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditValue(todo.title);
    setIsEditing(false);
  };

  return (
    <div
      className={`flex items-center gap-3 p-4 rounded-lg border transition-all ${
        todo.completed
          ? "bg-gray-50 border-gray-200"
          : "bg-white border-gray-200 hover:border-blue-300"
      }`}
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
        className="w-5 h-5 text-blue-500 rounded cursor-pointer"
      />

      {/* Todo Text or Edit Input */}
      {isEditing ? (
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSaveEdit();
            if (e.key === "Escape") handleCancel();
          }}
          autoFocus
          className="flex-1 px-3 py-1 border border-blue-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ) : (
        <span
          className={`flex-1 cursor-pointer ${
            todo.completed ? "line-through text-gray-400" : "text-gray-800"
          }`}
          onClick={() => setIsEditing(true)}
        >
          {todo.title}
        </span>
      )}

      {/* Action Buttons */}
      {isEditing ? (
        <div className="flex gap-2">
          <button
            onClick={handleSaveEdit}
            className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition-colors"
          >
            Save
          </button>
          <button
            onClick={handleCancel}
            className="px-3 py-1 bg-gray-400 text-white rounded text-sm hover:bg-gray-500 transition-colors"
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className="flex gap-2">
          <button
            onClick={() => setIsEditing(true)}
            className="px-3 py-1 bg-blue-400 text-white rounded text-sm hover:bg-blue-500 transition-colors"
          >
            Edit
          </button>
          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
