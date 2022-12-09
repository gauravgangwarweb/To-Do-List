import './style.css';
import {
  addFunction, showFunction, removeFunction, stordata,
} from './crud.js';

const addBtn = document.getElementById('addBtn');

// Showing tasks
showFunction();

// Adding task
addBtn.addEventListener('click', addFunction);

// Removing task
const remBtns = document.querySelectorAll('.fa');

remBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let temp = e.currentTarget.dataset;
    temp = +temp.id[temp.id.length - 1];
    removeFunction(temp);
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
    stordata[temp].description = inpValue.value;
    localStorage.setItem('tasks', JSON.stringify(stordata));
  });
});