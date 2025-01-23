"use client";

export default function TaskList({ tasks, removeTask, updateImportance }) {
  return (
    <ul className="list-none p-0 space-y-4">
      {tasks.map((taskObj, index) => (
        <li
          key={index}
          className={`flex justify-between items-center p-4 text-white rounded-lg shadow-md hover:scale-105 transition-all duration-300 ease-in-out
            ${
              taskObj.importance === "Urgent"
                ? "bg-red-600"
                : taskObj.importance === "Important"
                ? "bg-yellow-600"
                : "bg-green-600"
            }`}
        >
          <div className="flex flex-col">
            <span className="text-lg">{taskObj.task}</span>
            <span className="text-sm text-gray-200">{taskObj.importance}</span>
          </div>

          <div className="flex gap-4 items-center">
            <select
              value={taskObj.importance}
              onChange={(e) => updateImportance(index, e.target.value)}
              className="bg-transparent text-white border-2 border-white px-4 py-2 rounded-lg shadow-md hover:bg-opacity-50 transition-all duration-200 ease-in-out"
            >
              <option value="Urgent">Urgent</option>
              <option value="Important">Important</option>
              <option value="Not So Important">Not So Important</option>
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