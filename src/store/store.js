/*
This file contains the instantiation and update functions of a writable store.
The store is used to save the tasks from the local storage for easier access around the app.
*/
import { writable } from 'svelte/store';

/* Instantiation of the store 'task */
export const tasks = writable([]);

/*
Function to update the store.
Used to sync the store with local storage.
*/
export const updateStore = (storedTasks) => {
    tasks.update(() => JSON.parse(storedTasks));
}

/* Function to delete a task from the store. */
export const deleteStore = (id) => {
    tasks.update((t) => t.filter((toFilter) => toFilter.id !== id));
}

/* Function to edit a task in the store. */
export const editStore = (idx, title, description, date) => {
    tasks.update((t) => {
        t[idx].taskName = title;
        t[idx].taskDescription = description;
        t[idx].taskDate = date;
        return t;
    });
}

export const addStore = (task) => {
    tasks.update((t) => [
        task,
        ...t
    ]);
}