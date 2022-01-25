import { useState, useEffect } from "react";

export const useLocaleStorageState = () => {
  const getInitialTasks = () => {
    const tasksFromLocaleStorage = localStorage.getItem("tasks");

    return tasksFromLocaleStorage ? JSON.parse(tasksFromLocaleStorage) : [];
  };

  const [tasks, setTasks] = useState(getInitialTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return [ tasks, setTasks ]
};
