<template>
	<div class="main-content">
		<Hero />
		<About />
		<Products />
		<Contact />
		<Footer />
	</div>
</template>

<script>
	import Hero from '@/components/Hero.vue'
	import About from '@/components/About.vue'
	import Products from '@/components/Products.vue'
	import Contact from '@/components/Contact.vue'
	import Footer from '@/components/Footer.vue'

	export default {
		name: 'home',
		components: {
			Hero,
			About,
			Products,
			Contact,
			Footer
		}
	}
</script>

<style lang="scss" scoped>
	.main-content {
		padding: 50px 0 0;
	}
</style>
