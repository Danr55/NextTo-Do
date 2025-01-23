"use client";

import { useState } from "react";

export default function TaskInput({ addTask }) {
  const [task, setTask] = useState("");
  const [importance, setImportance] = useState("Not Important");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task, importance);
      setTask(""); // Clear input field
      setImportance("Not Important"); // Reset importance
    }
  };

  // Determine dropdown background color based on importance
  const getDropdownBackground = (importance) => {
    switch (importance) {
      case "Urgent":
        return "bg-red-600"; // Red for Urgent
      case "Important":
        return "bg-yellow-500"; // Yellow for Important
      case "Not Important":
        return "bg-gray-500"; // Gray for Not Important
      default:
        return "bg-white";
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
        className="flex-1 p-3 w-full text-black text-lg rounded-lg outline-none border-2 border-transparent focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 bg-white"
      />
      <select
        value={importance}
        onChange={(e) => setImportance(e.target.value)}
        className={`p-3 text-lg rounded-lg outline-none border-2 border-transparent focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 ${getDropdownBackground(importance)} text-white`}
      >
        <option value="Not Important">Not Important</option>
        <option value="Important">Important</option>
        <option value="Urgent">Urgent</option>
      </select>
      <button
        type="submit"
        className="bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-800 transition-all duration-200 ease-in-out"
      >
        Add
      </button>
    </form>
  );
}