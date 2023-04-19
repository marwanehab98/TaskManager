<script>
	import TaskItem from '../components/TaskItem.svelte';
	import { tasks } from '../store/store.js';
	import { onMount } from 'svelte';
	import AddTask from './addTask.svelte';

	let loaded = false;

	onMount(async () => {
		const taskStorage = localStorage.getItem('tasks');
		if (!taskStorage) localStorage.setItem('tasks', JSON.stringify([{}]));
		tasks.update(() => JSON.parse(taskStorage));
		loaded = true;
		// console.log($tasks);
	});
</script>

{#if loaded}
	<div class="flex flex-col justify-start gap-4 p-12">
		<AddTask />
		{#each $tasks as task}
			<TaskItem {task} />
		{/each}
	</div>
{/if}
