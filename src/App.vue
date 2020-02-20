<template>
	<main id="app">
		<Header />
		<router-view />
	</main>
</template>

<script>
	import Header from '@/components/Header.vue'

	export default {
		components: {
			Header
		}
	}
</script>

<style lang="scss">
	@import '../node_modules/sanitize.css/sanitize.css';

	body {
		color: #333;
		font-family: $regular;
	}
</style>
