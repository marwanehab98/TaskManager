/* This file contains the update functions for the local storage. */

/* This function fetches the tasks item from local storage and returns it */
export const getStorage = () => {
    let taskStorage = localStorage.getItem('tasks');
    if (!taskStorage) {
        localStorage.setItem('tasks', JSON.stringify([]));
        taskStorage = localStorage.getItem('tasks');
    }
    return taskStorage;
}

/* This function sets the value of the tasks item in local storage */
export const setStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}