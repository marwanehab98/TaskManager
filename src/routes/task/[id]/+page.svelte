<!--
This is the task editing view.
It is dynamically routed for each task using the route '/task/[id]'.
Where id is a parameter in the url corresponding to the id of the task being edited.
-->

<script type="text/partytown">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	import { tasks, editStore, updateStore } from '../../../store/store.js';
	import { getStorage, setStorage } from '../../../utils/storage.js';

	const INPUT_STYLE = 'rounded-md p-2';


	const id = $page.params.id;
	let currTask;
	let title = '';
	let description;
	let date;
	$: disableSubmit = !title || title === '';

	/* On this components mount the store is synced with local storage again to avoid purging the stores data if the page is reloaded. */
	onMount(async () => {
		let storage = getStorage();
		updateStore(storage);

		// Finding the index of the task being edited in the list of tasks in the store.
		currTask = $tasks.findIndex((task) => task.id === id);

		// Setting the initial values of the title, description and date variables bounded to the inputs in the view.
		title = $tasks[currTask]?.taskName;
		description = $tasks[currTask]?.taskDescription;
		date = $tasks[currTask]?.taskDate;
	});

	/*
	This function is binded to the click event of the save button.
	The save button is disbaled if the title of the task is empty.
	The function also returns before excuting if the title is empty in case a user enables the button through the inspection tools in the browser.
	*/
	const save = () => {
		if (disableSubmit) return;

		// Call to the editStore function which edits the value of the task at index 'currTask' with the values of title, description and date.
		editStore(currTask, title, description, date);

		// Set the value of the tasks item in local storage to the value of the updated store.
		setStorage($tasks);
		goto(`/`);
	};

	/* A function to cancel all changes and go back to the main view */
	const cancel = () => {
		goto(`/`);
	}
</script>

<svelte:window />

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="Task Details" />
</svelte:head>

<div class="flex justify-between items-start border-2 p-4 m-4 rounded-md h-auto bg-white shadow-md">
	<div class="flex flex-col gap-4">
		<h1 class="text-2xl">Edit {title}</h1>
		<input class={INPUT_STYLE} type="text" name="taskName" placeholder="Title" bind:value={title} />
		<textarea
			class={INPUT_STYLE}
			type="text"
			name="Description"
			placeholder="Description"
			bind:value={description}
		/>
		<input class={INPUT_STYLE} type="date" name="date" bind:value={date} />
		<div class="flex justify-start gap-2 p-2">
			<button
				class="w-fit bg-indigo-500 p-2 rounded-md text-white hover:bg-indigo-300 disabled:bg-indigo-200 disabled:text-gray-100"
				disabled={disableSubmit}
				on:click={save}>Save</button
			>
			<button
				class="w-fit bg-slate-200 p-2 rounded-md text-black hover:bg-slate-400"
				on:click={cancel}
				>Cancel</button
			>
		</div>
	</div>
</div>
