<!-- A task list component listing all tasks in the store as TaskItem components with the data of each task passed as a prop. -->
<script>
	import TaskItem from '../components/TaskItem.svelte';
	import { tasks } from '../store/store.js';
</script>

{#each $tasks as task}
	<TaskItem {task} />
{/each}
