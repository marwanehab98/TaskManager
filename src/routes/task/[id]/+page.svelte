<script type="text/partytown">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { tasks, editStore, updateStore } from '../../../store/store.js';
	import { goto } from '$app/navigation';
	import { getStorage, setStorage } from '../../../utils/worker.js';

	const INPUT_STYLE = 'rounded-md p-2';


	const id = $page.params.id;
	let currTask;
	let title = '';
	let description;
	let date;
	$: disableSubmit = !title || title === '';

	onMount(async () => {
		let storage = getStorage();
		updateStore(storage);

		currTask = $tasks.findIndex((task) => task.id === id);
		title = $tasks[currTask]?.taskName;
		description = $tasks[currTask]?.taskDescription;
		date = $tasks[currTask]?.taskDate;
	});

	const save = () => {
		if (disableSubmit) return;
		editStore(currTask, title, description, date);
		setStorage($tasks);
		goto(`/`);
	};

	const cancel = () => {
		goto(`/`);
	}
</script>

<svelte:window />

<svelte:head>
	<title>Sverdle</title>
	<meta name="description" content="Task Details" />
</svelte:head>

<div class="flex justify-between items-start border-2 p-4 m-4 rounded-md h-auto bg-white shadow-md">
	<div class="flex flex-col gap-4">
		<h1 class="text-2xl">Edit {title}</h1>
		<input class={INPUT_STYLE} type="text" name="taskName" placeholder="Title" bind:value={title} />
		<input
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
