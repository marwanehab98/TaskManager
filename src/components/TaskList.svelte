<script>
	import TaskItem from '../components/TaskItem.svelte';
	import { tasks } from '../store/store.js';
</script>

{#each $tasks as task}
	<TaskItem {task} />
{/each}
