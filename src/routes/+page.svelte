<script type="text/partytown">
	import TaskList from '../components/TaskList.svelte';
	import { onMount } from 'svelte';
	import { updateStore } from '../store/store.js';
	import { getStorage } from '../utils/worker.js';
	import AddTask from '../components/addTask.svelte';

	let loaded = false;

	onMount(async () => {
		let storage = getStorage();
		updateStore(storage)
		loaded = true;
	});
</script>

<svelte:head>
	<title>Tasks</title>
	<meta name="description" content="Task for Infralayer" />
</svelte:head>

<section>
	<div class="nav-bar" />
	<div class="flex flex-col justify-start items-center gap-4 p-12">
		<AddTask />
		{#if loaded}
			<TaskList />
		{/if}
	</div>
</section>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
