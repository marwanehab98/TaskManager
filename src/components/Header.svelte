<script>
	import { page } from '$app/stores';

	const ANCHOR_STYLE = 'mb-2 text-xl hover:underline';
</script>

<nav class="p-3 flex justify-around gap-8 bg-indigo-500 text-white">
	<a class={`${ANCHOR_STYLE} ${$page.url.pathname === '/' && 'underline'}`} href="/">Tasks</a>
	<a class={`${ANCHOR_STYLE} ${$page.url.pathname === '/about' && 'underline'}`} href="/about">About</a>
	<a class={`${ANCHOR_STYLE} ${$page.url.pathname === '/sverdle' && 'underline'}`} href="/sverdle">Sverdle</a>
</nav>
