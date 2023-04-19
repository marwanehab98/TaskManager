<script>
	import { tasks } from '../store/store.js';

	export let task;

	const deleteTask = () => {
		tasks.update((t) => t.filter((toFilter) => toFilter.id !== task.id));
		localStorage.setItem('tasks', JSON.stringify($tasks));
	};
</script>

<div class="flex justify-between items-center border-2 p-4 rounded-md h-auto bg-white shadow-md">
	<div class="flex flex-col gap-4">
		<h1>{task?.taskName}</h1>
		{#if task?.taskDescription}
			<p>{task?.taskDescription}</p>
		{/if}
		{#if task?.taskDate}
			<p>{task?.taskDate}</p>
		{/if}
		<div class="flex justify-between">
			<button class="w-fit bg-slate-200 p-2 rounded-md text-black" on:click={deleteTask}>Delete</button>
		</div>
	</div>
</div>
