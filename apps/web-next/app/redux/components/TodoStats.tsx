"use client";

import { useDispatch } from "react-redux";
import { clearCompleted } from "../store/todoSlice";
import type { Todo } from "../store/todoSlice";

interface TodoStatsProps {
  todos: Todo[];
}

export default function TodoStats({ todos }: TodoStatsProps) {
  const dispatch = useDispatch();
  const completedCount = todos.filter((todo) => todo.completed).length;
  const pendingCount = todos.length - completedCount;

  return (
    <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
      <div className="grid grid-cols-3 gap-4 mb-4 text-center">
        <div>
          <p className="text-2xl font-bold text-blue-600">{todos.length}</p>
          <p className="text-sm text-gray-600">Total</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-green-600">{completedCount}</p>
          <p className="text-sm text-gray-600">Completed</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-orange-600">{pendingCount}</p>
          <p className="text-sm text-gray-600">Pending</p>
        </div>
      </div>

      {/* Clear Completed Button */}
      {completedCount > 0 && (
        <button
          onClick={() => dispatch(clearCompleted())}
          className="w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors font-semibold text-sm"
        >
          Clear Completed ({completedCount})
        </button>
      )}
    </div>
  );
}
