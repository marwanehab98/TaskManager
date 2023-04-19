import { writable } from 'svelte/store';

export const tasks = writable([]);

export const updateStore = (storedTasks) => {
    tasks.update(() => JSON.parse(storedTasks));
}

export const deleteStore = (id) => {
    tasks.update((t) => t.filter((toFilter) => toFilter.id !== id));
}

export const editStore = (idx, title, description, date) => {
    tasks.update((t) => {
        t[idx].taskName = title;
        t[idx].taskDescription = description;
        t[idx].taskDate = date;
        return t;
    });
}