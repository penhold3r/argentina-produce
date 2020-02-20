<template>
	<footer class="footer">
		<small class="copy">
			Argentina Produce &copy; {{ new Date().getFullYear() }}
		</small>
	</footer>
</template>
<style lang="scss" scoped>
	.footer {
		background: $accent-primary-color;
		padding: 2rem;
		display: flex;

		.copy {
			color: #333;
			letter-spacing: 0.05rem;
			margin: auto;
		}
	}
</style>