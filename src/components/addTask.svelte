<!-- The AddTask Widget used to create new tasks -->
<script type="text/partytown">
	import { v4 as uuidv4 } from 'uuid';

	import { tasks, addStore } from '../store/store.js';
	import { setStorage } from '../utils/storage.js';

	const INPUT_STYLE = 'rounded-md p-2';

	/* Task title, description and date binded to the values of the widget inputs. */
	let title;
	let description;
	let date;

	let collapsible;

	/* Reactive variable used to prevent adding an empty task */
	$: disableSubmit = !title || title === '';

	/* Function used to expand/collapse the AddTask widget. */
	const expand = () => {
		collapsible.classList.replace('h-0', 'h-full');
	};

	const collapse = () => {
		collapsible.classList.replace('h-full', 'h-0');
	};

	/*
	This function is binded to the click event of the add button.
	The add button is disbaled if the title of the task is empty.
	The function also returns before excuting if the title is empty in case a user enables the button through the inspection tools in the browser.
	*/
	const addTask = () => {
		if (disableSubmit) return;
		let newTask = {
			id: uuidv4(),
			taskName: title,
			taskDescription: description,
			taskDate: date
		};

		// Call to the addStore function passing the newTask as a parameter to save into the store.
		addStore(newTask);

		// Setting the tasks item in local storage to the value of the updated store.
		setStorage($tasks);

		collapse();
		title = null;
		description = null;
		date = null;
	};

	/* A function to reset all fields and go collapse the widget. */
	const cancel = () => {
		collapse();
		title = null;
		description = null;
		date = null;
	};
</script>

<div
	class="flex flex-col justify-start items-center gap-4 border-2 py-4 px-8 rounded-md h-auto bg-white shadow-md w-full"
>
	<h1 class="text-2xl self-start">Add a new task</h1>
	<div class="flex flex-col gap-4 w-full">
		<input
			class={`${INPUT_STYLE} mx-2`}
			type="text"
			name="taskName"
			placeholder="Title"
			bind:value={title}
			on:focus={expand}
		/>
		<div class="flex flex-col p-2 gap-4 h-0 overflow-hidden" bind:this={collapsible}>
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
					on:click={addTask}
					disabled={disableSubmit}>Save</button
				>
				<button
					class="w-fit bg-slate-200 p-2 rounded-md text-black hover:bg-slate-400"
					on:click={cancel}>Cancel</button
				>
			</div>
		</div>
	</div>
</div>
