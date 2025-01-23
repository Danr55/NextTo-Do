"use client";

export default function TaskList({ tasks, removeTask, updateImportance }) {
  return (
    <ul className="list-none p-0 space-y-4">
      {tasks.map((task, index) => (
        <li
          key={index}
          className={`flex justify-between items-center p-4 text-white rounded-lg shadow-md hover:scale-105 transition-all duration-300 ease-in-out ${
            task.importance === "Urgent"
              ? "bg-red-600"
              : task.importance === "Important"
              ? "bg-yellow-500"
              : "bg-gray-500"
          }`}
        >
          <span className="text-lg">{task.task}</span>
          <div className="flex gap-4">
            <select
              value={task.importance}
              onChange={(e) => updateImportance(index, e.target.value)}
              className="p-2 text-lg rounded-lg outline-none border-2 border-transparent focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 bg-white text-black"
            >
              <option value="Not Important">Not Important</option>
              <option value="Important">Important</option>
              <option value="Urgent">Urgent</option>
            </select>
            <button
              onClick={() => removeTask(index)}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-200 ease-in-out"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}