import './style.css';
import {
  addFunction, showFunction, removeFunction, stordata, updateTask,
} from './crud.js';
import { compTask, removeCheckedTasks } from './interactive.js';

const addBtn = document.getElementById('addBtn');

// Showing tasks
showFunction();

// Adding task
addBtn.addEventListener('click', () => {
  const Input = document.getElementById('task');
  const emptyDiv = document.querySelector('.empty');
  if (!Input.value) {
    emptyDiv.innerText = 'Please give a input';
  } else {
    const model = {
      description: Input.value,
      completed: false,
      index: 1,
    };
    addFunction(model);
    window.location.reload();
  }
});

// Removing task
const remBtns = document.querySelectorAll('.fa');

remBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let temp = e.currentTarget.dataset;
    temp = +temp.id[temp.id.length - 1];
    removeFunction(stordata, temp);
    window.location.reload();
  });
});

// Showing remove btn
const showRembtn = document.querySelectorAll('.fa-ellipsis-v');
showRembtn.forEach((btn) => {
  btn.addEventListener('mouseover', (e) => {
    let temp = e.currentTarget.dataset;
    temp = +temp.id[temp.id.length - 1];
    const tempElps = document.querySelector(`.el${temp}`);
    tempElps.classList.remove('fa-ellipsis-v');
    tempElps.classList.add('fa-trash-can');
  });
  btn.addEventListener('mouseleave', (e) => {
    let temp = e.currentTarget.dataset;
    temp = +temp.id[temp.id.length - 1];
    const tempElps = document.querySelector(`.el${temp}`);
    tempElps.classList.add('fa-ellipsis-v');
    tempElps.classList.remove('fa-trash-can');
  });
});

// Updating tasks
const taskInps = document.querySelectorAll('.task-details');
taskInps.forEach((inp) => {
  inp.addEventListener('click', (f) => {
    const temp = f.currentTarget.id;
    const inpAttr = document.getElementById(temp);
    inpAttr.removeAttribute('readonly');
  });
});
taskInps.forEach((inp) => {
  inp.addEventListener('keyup', (f) => {
    const temp = f.currentTarget.id;
    const inpValue = document.getElementById(temp);
    const inValue = inpValue.value;
    updateTask(inValue, stordata, temp);
  });
});

// Interactiveness
const checkBox = document.querySelectorAll('.task-check');
checkBox.forEach((check, index) => {
  check.addEventListener('change', () => {
    compTask(stordata, index);
  });
});

const clearAll = document.getElementById('clear');
clearAll.addEventListener('click', () => {
  removeCheckedTasks(stordata);
  window.location.reload();
});