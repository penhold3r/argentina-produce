<template>
	<header class="main-header">
		<div class="inner-header">
			<div class="hamb-menu">
				<div class="bars">
					<div class="menu-bar" />
					<div class="menu-bar" />
					<div class="menu-bar" />
				</div>
			</div>
			<h1 class="logo">
				<router-link :to="`/${$i18n.locale}`">
					<img src="@/assets/argentina_produce-logo-mobile.svg" alt="Argentina Produce" />
				</router-link>
			</h1>
			<nav>
				<ul>
					<li v-for="(link, i) in $t('nav')" :key="i">
						<a
							:href="link.toLowerCase().replace(' ', '-')"
							v-scroll-to="`#${link.toLowerCase().replace(' ', '-')}`"
							>{{ link }}</a
						>
					</li>
				</ul>
			</nav>
			<div class="lang">
				<router-link v-for="(lang, i) in langs" :key="i" :to="`/${lang}`">
					<span v-if="lang !== $i18n.locale" :data-lang="lang">
						{{ $t('label', lang) }}
					</span>
				</router-link>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: 'Header',
	data() {
		return {
			langs: Object.keys(this.$i18n.messages),
			menuOpen: false
		}
	},
	methods: {
		handleScroll(event) {
			const logo = document.querySelector('.logo')

			window.scrollY > 300 ? logo.classList.add('visible') : logo.classList.remove('visible')
		},
		handleMenu() {}
	},
	created() {
		window.addEventListener('scroll', this.handleScroll)
	},
	destroyed() {
		window.removeEventListener('scroll', this.handleScroll)
	}
}
</script>

<style scoped lang="scss">
header {
	background: $primary-color;
	border-bottom: 6px solid $accent-primary-color;
	box-shadow: $box-shadow;
	height: 50px;
	position: fixed;
	width: 100vw;
	z-index: 99;

	.inner-header {
		margin: 0 auto;
		max-width: $max-width;
		padding: 0.5rem;
		position: relative;
		display: flex;

		.logo {
			display: flex;
			margin: 0;
			width: 200px;

			@include tablet {
				width: 30px;
			}

			a {
				color: #fff;
				display: block;
				margin: auto;
				width: 100%;
				opacity: 0;
				transform: translateX(-2rem);
				transition: all 0.3s ease-out;

				@include tablet {
					transform: translateX(0);
					opacity: 1;
				}

				img {
					display: block;
					width: 100%;

					@include tablet {
						clip-path: polygon(0 0, 30px 0, 30px 100%, 0 100%);
						width: 200px;
					}
				}
			}

			&.visible {
				a {
					opacity: 1;
					transform: translateX(0);
				}
			}
		}

		nav {
			display: flex;
			margin: auto;

			@include tablet {
				margin: auto 0 auto auto;
			}

			ul {
				display: flex;
				list-style: none;
				margin: auto;
				padding: 0;

				li {
					padding: 0;
					margin: 0.5rem;

					@include tablet {
						margin: 0.5rem 0.25rem;
					}

					a {
						color: #fff;
						display: block;
						font-size: 0.8rem;
						letter-spacing: 0.05rem;
						text-decoration: none;
						text-transform: uppercase;
						transition: all 0.3s;

						&:hover {
							color: $secondary-color;
						}
					}
				}
			}
		}

		.lang {
			margin: auto 1.25rem auto auto;

			@include tablet {
				margin: auto 0.5rem;
			}

			a {
				color: #fff;
				display: block;
				font-size: 0.7rem;
				letter-spacing: 0.05rem;
				text-decoration: none;
				text-transform: uppercase;
				transition: all 0.3s;

				span {
					border: 1px solid #fff;
					display: block;
					padding: 0.25rem 0.5rem;

					@include tablet {
						font-size: 0;

						&:before {
							content: attr(data-lang);
							display: block;
							font-size: 0.7rem;
							text-align: center;
						}
					}
				}

				&:hover {
					color: $primary-color;
					background: #fff;
				}
			}
		}
	}
}
</style>
