<script>
	import Counter from "./Counter.svelte";
	import TaskList from "../components/TaskList.svelte";


</script>

<svelte:head>
	<title>Tasks</title>
	<meta name="description" content="Task for Infralayer" />
</svelte:head>

<section>
	<div class="nav-bar" />
	<TaskList></TaskList>
</section>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
