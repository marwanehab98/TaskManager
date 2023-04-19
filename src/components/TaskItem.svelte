<!-- The TaskItem component -->
<script type="text/partytown">
	import { goto } from '$app/navigation';

	import { tasks, deleteStore } from '../store/store.js';
	import { setStorage } from '../utils/storage.js';

	/* Task data passed as a prop from the TaskList component. */
	export let task;

	/*
	This function is binded to the click event of the delete button.
	It is used to delete the task from the store and local storage.
	*/
	const deleteTask = (event) => {
		event.preventDefault();
		deleteStore(task.id);
		setStorage($tasks);
	};
</script>

<div
	class="border-2 p-4 rounded-md h-auto bg-white shadow-md w-full hover:bg-gray-100"
	>
	<div class="flex flex-col justify-between w-full h-full">
		<div
			class="flex flex-col gap-4 mb-4 w-full h-full cursor-pointer"
			on:click={() => goto(`/task/${task.id}`)}
			on:keydown={() => goto(`/task/${task.id}`)}
		>
			<h1 class="text-2xl">{task?.taskName}</h1>
			{#if task?.taskDescription}
				<p class="break-words">{task?.taskDescription}</p>
			{/if}
			{#if task?.taskDate}
				<p class="break-words">{`Due ${task?.taskDate}`}</p>
			{/if}
		</div>
		<div class="flex justify-between">
			<button
				class="w-fit bg-slate-200 p-2 rounded-md text-black hover:bg-slate-400"
				on:click={deleteTask}>Delete</button
			>
		</div>
	</div>
</div>
