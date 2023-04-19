export const getStorage = () => {
    let taskStorage = localStorage.getItem('tasks');
    if (!taskStorage) {
        localStorage.setItem('tasks', JSON.stringify([]));
        taskStorage = localStorage.getItem('tasks');
    }
    return taskStorage;
}

export const setStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

