import { addFunction, updateTask } from '../crud.js';
import { compTask, removeCheckedTasks } from '../interactive.js';

describe('Testing update, completed and complete all function', () => {
  test('testing add function to add a task object in local storage', () => {
    const task1 = { description: 'Make a coffee', completed: false, index: 1 };
    const task2 = { description: 'Give water to plants', completed: false, index: 2 };
    addFunction(task1);
    addFunction(task2);
    const stordata = JSON.parse(localStorage.getItem('tasks'));
    expect(stordata.length).toBe(2);
  });

  test('Testing update update function', () => {
    const input = 'Make a coffee for mom and dad';
    const stordata = JSON.parse(localStorage.getItem('tasks'));
    updateTask(input, stordata, 0);
    expect(stordata[0].description).toBe('Make a coffee for mom and dad');
  });

  test('Testing cheked function to update status', () => {
    const task3 = { description: 'Watch a movie', completed: false, index: 3 };
    addFunction(task3);
    const stordata = JSON.parse(localStorage.getItem('tasks'));
    compTask(stordata, 0);
    expect(stordata[0].completed).toBe(true);
  });

  test('Testing clear all completed function', () => {
    addFunction({ description: 'Buy some fruits', completed: true, index: 4 });
    let stordata = JSON.parse(localStorage.getItem('tasks'));
    compTask(stordata, 1);
    removeCheckedTasks(stordata);
    stordata = JSON.parse(localStorage.getItem('tasks'));
    expect(stordata.length).toBe(2);
  });
});