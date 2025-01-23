"use client";

import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import './globals.css';

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask, importance) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { task: newTask, importance: importance },
    ]);
  };

  const removeTask = (taskIndex) => {
    setTasks((prevTasks) => prevTasks.filter((_, index) => index !== taskIndex));
  };

  const updateImportance = (index, newImportance) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index].importance = newImportance;
      return updatedTasks;
    });
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white p-8">
      <div className="max-w-3xl w-full rounded-lg p-8 bg-white/20 backdrop-blur-md shadow-lg">
        <h1 className="text-4xl font-extrabold mb-6 text-center">NextTo-Do</h1>
        <TaskInput addTask={addTask} />
        <TaskList tasks={tasks} removeTask={removeTask} updateImportance={updateImportance} />
      </div>
    </main>
  );
}