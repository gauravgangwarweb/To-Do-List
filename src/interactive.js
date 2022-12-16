import { stordata } from './crud.js';

// Setting description value
export const compTask = (arr, i) => {
  if (arr[i].completed === false) {
    arr[i].completed = true;
    localStorage.setItem('tasks', JSON.stringify(stordata));
  } else {
    arr[i].completed = false;
    localStorage.setItem('tasks', JSON.stringify(stordata));
  }
};

// Removing checked items
export const removeCheckedTasks = (stordata) => {
  stordata = stordata.filter((t) => t.completed === false);
  localStorage.setItem('tasks', JSON.stringify(stordata));
};
