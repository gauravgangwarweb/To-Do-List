const tasksarray = [];
export const stordata = JSON.parse(localStorage.getItem('tasks'));

// Addfunction
export const addFunction = (model) => {
  if (!stordata) {
    tasksarray.push(model);
    localStorage.setItem('tasks', JSON.stringify(tasksarray));
  } else {
    stordata.push(model);
    localStorage.setItem('tasks', JSON.stringify(stordata));
  }
};

// Show function
export const showFunction = () => {
  const listBlock = document.querySelector('.list-block');
  if (!stordata || !stordata[0]) {
    listBlock.innerHTML = '<div></div>';
  } else {
    for (let i = 0; i < stordata.length; i += 1) {
      stordata[i].index = i + 1;
      localStorage.setItem('tasks', JSON.stringify(stordata));
      let check = '';
      if (stordata[i].completed === true) {
        check = 'checked';
      } else {
        check = '';
      }
      const temp = i;
      const Takstemplate = `
              <div class="task-item">
                <input type="checkbox" class="task-check" name="task-check" ${check}>
                <div class="task-ins">
                <input id="${temp}" class="task-details t${temp}" type="text" value="${stordata[temp].description}" readonly>
                <a href="#" class="task-option"><i data-id="el${temp}" class="fa fa-ellipsis-v el${temp}"></i></a>                
                </div>
              </div>
            `;
      listBlock.innerHTML += Takstemplate;
    }
  }
};

// Remove function
export const removeFunction = (array, id) => {
  array.splice(id, 1);
  localStorage.setItem('tasks', JSON.stringify(array));
};

// Update tasks list
export const updateTask = (inp, arr, i) => {
  arr[i].description = inp;
  localStorage.setItem('tasks', JSON.stringify(stordata));
};