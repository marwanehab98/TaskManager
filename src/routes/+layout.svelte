<script>
	import Header from '../components/Header.svelte';
	import '../app.css';
	import { partytownSnippet } from '@builder.io/partytown/integration';
	import { onMount } from 'svelte';

	let scriptEl;
	onMount(() => {
		if (scriptEl) {
			scriptEl.textContent = partytownSnippet();
		}
	});
</script>

<svelte:head>
	<script>
		partytown = {
			forward: ['dataLayer.push']
		};
	</script>
	<script bind:this={scriptEl}></script>
</svelte:head>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>
</div>
