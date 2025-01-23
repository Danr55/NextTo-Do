"use client";

import { useState } from "react";

export default function TaskInput({ addTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask(""); // Clear input field
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-4 mb-6 max-w-xl w-full mx-auto bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
    >
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task..."
        className="flex-1 p-3 w-full text-black bg-white text-lg rounded-lg outline-none border-2 border-transparent focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500"
      />
      <button
        type="submit"
        className="bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-800 transition-all duration-200 ease-in-out"
      >
        Add
      </button>
    </form>
  );
}