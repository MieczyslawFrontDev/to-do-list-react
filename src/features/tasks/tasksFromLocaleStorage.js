const localStorageKey = "tasks";

export const saveTasksInLocaleStorage = (tasks) =>
  localStorage.setItem(localStorageKey, JSON.stringify(tasks));
console.log(saveTasksInLocaleStorage);

export const getTasksFromLocaleStorage = () =>
  JSON.parse(localStorage.getItem(localStorageKey)) || [];
