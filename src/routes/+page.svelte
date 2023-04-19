<!-- 
Main Svelte route at '/'.
This is the main component of the task manager app.
This component shows the 'Add Task' Widget and the 'Tasks list'.
-->

<script type="text/partytown">
	import { onMount } from 'svelte';

	import AddTask from '../components/addTask.svelte';
	import TaskList from '../components/TaskList.svelte';

	import { updateStore } from '../store/store.js';
	import { getStorage } from '../utils/storage.js';

	/* Flag to avoid showing the list before the data is loaded */
	let loaded = false;

	/*
	The onMount function fires up when the component mounts at the beginning of its life cycle.
	This function is responsible for loading the data and writing it to the store.
	*/
	onMount(async () => {
		// Call to the getStorage function from the storage file
		// This returns the task data from local storage and saves it to the storage variable.
		let storage = getStorage();

		// Call to the updateStore function passing the return value of the getStorage function as a parameter.
		// This parses the tasks item from local storage and saves it to the store.
		updateStore(storage);

		// Set the loaded variable to true to signify that data loading has finished.
		loaded = true;
	});
</script>

<svelte:head>
	<title>Tasks</title>
	<meta name="description" content="Task for Infralayer" />
</svelte:head>

<section>
	<!-- Flex container containing the AddTask widget and a conditionally rendered TaskList -->
	<div class="flex flex-col justify-start items-center gap-4 p-12">
		<AddTask />
		{#if loaded}
			<TaskList />
		{/if}
	</div>
</section>

<style lang="postcss">
	/* Set the background color to a very light gray */
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
