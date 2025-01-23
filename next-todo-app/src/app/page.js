"use client";

import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const removeTask = (taskIndex) => {
    setTasks((prevTasks) => prevTasks.filter((_, index) => index !== taskIndex));
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} removeTask={removeTask} />
    </main>
  );
}