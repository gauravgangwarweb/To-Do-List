import { addFunction, removeFunction } from "../crud.js";

describe('Testing add and remove functions', () => {
    test('testing add function to add a task object in local storage', () => {
        let task1 = "Make a coffee";
        let task2 = "Give water to the plants";
        addFunction(task1);
        addFunction(task2);
        const stordata = JSON.parse(localStorage.getItem('tasks'));
        expect(stordata.length).toBe(2);
    })

    test('testing remove function to remove a task object in local storage', () => {
        const stordata = JSON.parse(localStorage.getItem('tasks'));
        removeFunction(stordata, 0);
        expect(stordata.length).toBe(1);
    })
})