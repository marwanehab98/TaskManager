# A task manager application made as a task for Infralayer.

Everything you need to download and run this project.

## Description.

This is a task management application created using Sveltekit, Tailwindcss, using Local Storage as data storage and the Partytown library to offload data storage.

## Download.

Either clone the repo through the command line.

```
git clone https://github.com/marwanehab98/TaskManager.git
```

Or download as a zip file through the green button saying "<> Code" at the top of the page.

- In case of the latter, extract the zip file before continuing.

## Installing dependencies.

- Launch your terminal.
- Navigate to where you cloned the repo using ```cd [path]```
- Run the command ```npm i``` to install the required dependencies.

## Running the application.

- Launch your terminal.
- Navigate to where you cloned the repo using ```cd [path]```.
- Run the command ```npm run dev```.
- A URL will show up in your terminal.
- Click the URL or copy and paste to your browser to start using the app.

### If you want to try a live version of this application deployed on netlify you can use this URL:
- https://celadon-sawine-25f032.netlify.app/

## Documentation

The code is commented with explanations of how it works.

The file structure is as follows:

- src
  - components
    - addTask.svelte
    - Header.svelte
    - TaskItem.svelte
    - TaskList.svelte
  - routes
    - +layout.svelte (Default layout)
    - +page.svelte (Main view)
    - task (/task route)
      - [id] (for dynamic routing)
        - +page.svelte (Task View).
  - store
    - store.js (store logic)
  - utils
    - storage.js (local storage logic)

### Sveltekit
Svelte kit is an app framework built on Svelte that provides the following features and more.
- Routing
- Server-side rendering
- Data fetching
- Prerendering
- Single-page apps
- Optimised production builds

The documentation for Sveltekit can be found here:
- https://kit.svelte.dev/docs/introduction

### Tailwind CSS
Tailwind CSS is a CSS framework that unlike others does not constain you to predefined classes.

For using Tailwind CSS with Sveltekit, you can follow this guide:
- https://tailwindcss.com/docs/guides/sveltekit

The documentation for Tailwind CSS can be found here:
- https://tailwindcss.com/docs/

### Partytown
Partytown is a lazy-loaded library to help relocate resource intensive scripts into a web worker, and off of the main thread.

For using Partytown with Sveltekit, you can follow this guide:
- https://partytown.builder.io/sveltekit
