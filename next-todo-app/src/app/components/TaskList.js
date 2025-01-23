"use client";

export default function TaskList({ tasks, removeTask }) {
  return (
    <ul className="list-none p-0">
      {tasks.map((task, index) => (
        <li
          key={index}
          className="flex justify-between items-center mb-2 p-2 bg-gray-100 rounded"
        >
          {task}
          <button
            onClick={() => removeTask(index)}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
