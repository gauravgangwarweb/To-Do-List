import { stordata } from './crud.js';

// Setting description value
export const compTask = (i) => {
  if (stordata[i].completed === false) {
    stordata[i].completed = true;
    localStorage.setItem('tasks', JSON.stringify(stordata));
  } else {
    stordata[i].completed = false;
    localStorage.setItem('tasks', JSON.stringify(stordata));
  }
};

// Removing checked items
export const removeCheckedTasks = () => {
  const newArr = stordata.filter((t) => t.completed === false);
  localStorage.setItem('tasks', JSON.stringify(newArr));
  window.location.reload();
};
