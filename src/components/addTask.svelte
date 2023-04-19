<script>
	import { tasks } from '../store/store.js';
	import { v4 as uuidv4 } from 'uuid';

	const INPUT_STYLE = 'rounded-md p-2';
	let title;
	let description;
	let date;

    let collapsible;

	$: disableSubmit = !title || title === '';

    const expand = () => {
        collapsible.classList.replace("h-0", "h-full");
    }

    const collapse = () => {
        collapsible.classList.replace("h-full", "h-0");
    }

	const addTask = () => {
		if (disableSubmit) return;
		tasks.update((t) => [
			{
				id: uuidv4(),
				taskName: title,
				taskDescription: description,
				taskDate: date,
				completed: false,
				creationDate: new Date()
			},
			...t
		]);
		localStorage.setItem('tasks', JSON.stringify($tasks));
		title = null;
		description = null;
		date = null;
        collapse();
	};

    const cancel = () => {
        title = null;
		description = null;
		date = null;
        collapse();
    }
</script>

<div class="flex justify-between items-start border-2 p-4 rounded-md h-auto bg-white shadow-md">
	<div class="flex flex-col gap-4">
		<h1 class="text-2xl">Add a new task</h1>
		<input class={INPUT_STYLE} type="text" name="taskName" placeholder="Title" bind:value={title} on:focus={expand}/>
		<div class="flex flex-col p-2 gap-4 h-0 overflow-hidden transition transition-[height] duration-300 ease-in-out" bind:this={collapsible}>
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
					class="w-fit bg-indigo-500 p-2 rounded-md text-white disabled:bg-indigo-200 disabled:text-gray-100"
					on:click={addTask}
					disabled={disableSubmit}>Save</button
				>
				<button
					class="w-fit bg-slate-200 p-2 rounded-md text-black disabled:bg-slate-100 disabled:text-gray-400"
					on:click={cancel}
					>Cancel</button
				>
			</div>
		</div>
	</div>
</div>
