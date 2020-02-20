<template>
	<section class="about" :id="$t('about.id')">
		<div class="about__image">
			<img src="@/assets/about.jpg" alt="Factory" class="factory" v-parallax="0.2" />
			<img src="@/assets/vitamina_vida-logo.svg" alt="Vitamina Vida" class="vitamina" />
		</div>
		<div class="about__content" :style="{ backgroundImage: `url(${bgLogo})` }">
			<h2>{{ $t('about.title') }}</h2>
			<div class="text">
				<p>{{ $t('about.text') }}</p>
			</div>
			<Gallery />
		</div>
	</section>
</template>

<script>
import bgLogo from '@/assets/logo-outline.svg'
import Gallery from '@/components/Gallery.vue'

export default {
	name: 'About',
	components: {
		Gallery
	},
	data() {
		return {
			bgLogo
		}
	}
}
</script>

<style lang="scss" scoped>
.about {
	background: $secondary-color;
	padding: 2rem 1rem 0;

	&__image {
		box-shadow: $box-shadow;
		display: flex;
		height: 300px;
		margin: 0 auto;
		max-width: $max-width;
		overflow: hidden;
		position: relative;

		@include tablet {
			height: 250px;
		}

		.factory {
			height: 100vh;
			object-fit: cover;
			opacity: 0.9;
			position: absolute;
			width: 100%;
			z-index: 0;
		}

		.vitamina {
			filter: drop-shadow(0 0 5px #000);
			margin: auto;
			position: relative;
			z-index: 1;

			@include tablet {
				width: 150px;
			}
		}
	}

	&__content {
		background-repeat: no-repeat;
		background-position: right center;
		background-size: 50%;
		margin: 0 auto;
		max-width: $max-width;
		padding: 4rem 1rem 6rem;

		@include tablet {
			padding: 2rem 0 4rem;
		}

		h2 {
			color: #fff;
			font-size: 2.5rem;
			font-family: $light;
			font-weight: lighter;
			font-weight: 100;
			margin: 0 auto 1rem;
			max-width: 800px;

			@include tablet {
				font-size: 2rem;
			}
		}

		.text {
			margin: 0 auto;
			max-width: 800px;

			p {
				color: #fff;
				font-size: 1.25rem;
				margin: 0;

				@include tablet {
					font-size: 1rem;
				}
			}
		}
	}
}
</style>
