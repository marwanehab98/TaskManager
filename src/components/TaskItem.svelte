<script type="text/partytown">
	import { tasks, deleteStore } from '../store/store.js';
	import { goto } from '$app/navigation';
	import { setStorage } from '../utils/worker.js';

	export let task;

	const deleteTask = () => {
		deleteStore(task.id);
		setStorage($tasks);
		// tasks.update((t) => t.filter((toFilter) => toFilter.id !== task.id));
		// localStorage.setItem('tasks', JSON.stringify($tasks));
	};

	const goToTask = () => {
		goto(`/task/${task.id}`)
	}
</script>

<div class="flex justify-between items-center border-2 p-4 rounded-md h-auto bg-white shadow-md cursor-pointer w-full hover:bg-gray-100" on:click={goToTask} on:keydown={goToTask}>
	<div class="flex flex-col gap-4">
		<h1 class="text-2xl">{task?.taskName}</h1>
		{#if task?.taskDescription}
			<p>{task?.taskDescription}</p>
		{/if}
		{#if task?.taskDate}
			<p>{`Due ${task?.taskDate}`}</p>
		{/if}
		<div class="flex justify-between">
			<button class="w-fit bg-slate-200 p-2 rounded-md text-black hover:bg-slate-400" on:click={deleteTask}>Delete</button>
		</div>
	</div>
</div>
