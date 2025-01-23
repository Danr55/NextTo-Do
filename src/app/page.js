"use client";

import { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import './globals.css';

export default function Home() {
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  // Add a new task
  const addTask = (newTask, importance) => {
    const newTaskObj = { task: newTask, importance, createdAt: new Date() };
    setTasks((prevTasks) => [...prevTasks, newTaskObj]);
  };

  // Update task importance
  const updateImportance = (taskIndex, newImportance) => {
    const updatedTasks = tasks.map((task, index) =>
      index === taskIndex ? { ...task, importance: newImportance } : task
    );
    setTasks(updatedTasks);
  };

  // Remove a task
  const removeTask = (taskIndex) => {
    const updatedTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(updatedTasks);
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