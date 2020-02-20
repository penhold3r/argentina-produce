<template>
	<section class="hero" :id="$t('hero.id')">
		<div class="main-logo">
			<img src="@/assets/argentina_produce-logo.svg" alt="Argentina Produce" />
		</div>
		<div class="lead" :style="{ backgroundImage: `url(${bgImage})` }">
			<h2>{{ $t('hero.title') }}</h2>
			<div class="text" v-html="$t('hero.text')" />
		</div>
	</section>
</template>

<script>
import bgImage from '@/assets/intro-bg.jpg'

export default {
	name: 'Hero',
	data() {
		return {
			bgImage
		}
	}
}
</script>

<style scoped lang="scss">
.hero {
	display: flex;
	flex-direction: column;

	.main-logo {
		display: flex;
		padding: 1rem;

		img {
			display: block;
			margin: auto;
		}
	}

	.lead {
		align-items: center;
		background-blend-mode: multiply;
		background-color: rgba($secondary-color, 0.5);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: center;
		padding: 2rem 1rem;

		h2 {
			color: #fff;
			font-size: 2rem;
			margin: 0 0 1rem;
			text-shadow: $text-shadow;
			letter-spacing: 0.05rem;
			text-align: center;
			line-height: 1.1;

			@include tablet {
				font-size: 1.75rem;
			}
		}

		.text /deep/ p {
			margin: 0 0 1rem !important;
			color: #fff;
			font-size: 1.5rem;
			margin: 0 auto;
			max-width: 600px;
			text-align: center;
			text-shadow: $text-shadow;
			line-height: 1.1;

			@include tablet {
				font-size: 1.25rem;
			}
		}
	}
}
</style>
