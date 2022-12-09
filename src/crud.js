const tasksarray = [];
const Input = document.getElementById('task');
const emptyDiv = document.querySelector('.empty');
export const stordata = JSON.parse(localStorage.getItem('tasks'));

// Addfunction
export const addFunction = () => {
  if (!Input.value) {
    emptyDiv.innerText = 'Please give a input';
  } else {
    const model = {
      description: Input.value,
      completed: false,
      index: 1,
    };
    if (!stordata) {
      tasksarray.push(model);
      localStorage.setItem('tasks', JSON.stringify(tasksarray));
    } else {
      stordata.push(model);
      localStorage.setItem('tasks', JSON.stringify(stordata));
    }
    window.location.reload();
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
export const removeFunction = (id) => {
  stordata.splice(id, 1);
  localStorage.setItem('tasks', JSON.stringify(stordata));
};