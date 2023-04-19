<!--
Main layout of the app.
All routes conform to this layout unless overriden.
-->

<!-- The script contains the necessary code for integrating Partytown into a sveltkit app. -->
<script>
	import { onMount } from 'svelte';
	import { partytownSnippet } from '@builder.io/partytown/integration';

	import Header from '../components/Header.svelte';
	import '../app.css';

	/* Adding the Partytown script to the DOM head */
	let scriptEl;
	onMount(() => {
		if (scriptEl) {
			scriptEl.textContent = partytownSnippet();
		}
	});
</script>

<svelte:head>
	<script>
		// Forward the necessary functions to the web worker layer.
		partytown = {
			forward: ['dataLayer.push']
		};
	</script>
	<script bind:this={scriptEl}></script>
</svelte:head>

<div class="app">
	<!-- A header component that's visible in all views. -->
	<Header />

	<!-- The main component containing a slot for showing the view of each route. -->
	<main>
		<slot />
	</main>
</div>
