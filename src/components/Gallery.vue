<template>
	<div class="gallery">
		<div
			class="gallery__button"
			@click="galleryOpen = true"
		>
			{{$t('about.gallery')}}
		</div>
		<div
			class="gallery__grid"
			v-if="galleryOpen"
		>
			<div
				v-for="(image, i) in images"
				class="image-card"
				:key="`image-${i}`"
				:data-index="`${i}`"
				@click="show(i)"
			>
				<img
					:src="`${image.url}`"
					alt=""
				>
			</div>
		</div>
		<div
			:class="`${visible ? 'modal visible' : 'modal'}`"
			@click="hide"
		>

			<div class="modal__content">
				<div
					class="modal__close"
					@click.stop="hide"
				>&times;</div>
				<div
					class="prev arrow"
					@click.stop="prev"
					:class="{'invisible': ! hasPrev()}"
				>
					<svg
						fill="#fff"
						height="48"
						viewBox="0 0 24 24"
						width="48"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
						<path
							d="M0-.5h24v24H0z"
							fill="none"
						/>
					</svg>
				</div>
				<div
					class="image"
					@click.stop=""
				>
					<img :src="images[index].url">
				</div>
				<div
					class="next arrow"
					@click.stop="next"
					:class="{'invisible': ! hasNext()}"
				>
					<svg
						fill="#fff"
						height="48"
						viewBox="0 0 24 24"
						width="48"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
						<path
							d="M0-.25h24v24H0z"
							fill="none"
						/>
					</svg>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	const context = require.context('../assets/gallery', true, /\.jpe?g$/)
	const images = []

	context.keys().forEach(key => images.push({ url: context(key) }))

	export default {
		name: 'Gallery',

		data() {
			return {
				galleryOpen: false,
				visible: false,
				index: 0,
				images
			}
		},
		methods: {
			show(i) {
				this.visible = true
				this.index = i
			},
			hide() {
				this.visible = false
				this.index = 0
			},
			hasNext() {
				return this.index + 1 < this.images.length
			},
			hasPrev() {
				return this.index - 1 >= 0
			},
			prev() {
				if (this.hasPrev()) {
					this.index -= 1
				}
			},
			next() {
				if (this.hasNext()) {
					this.index += 1
				}
			},
			onKeydown(e) {
				if (this.visible) {
					switch (e.key) {
						case 'ArrowRight':
							this.next()
							break
						case 'ArrowLeft':
							this.prev()
							break
						case 'ArrowDown':
						case 'ArrowUp':
						case ' ':
							e.preventDefault()
							break
						case 'Escape':
							this.hide()
							break
					}
				}
			}
		},
		mounted() {
			console.log('files: ', images)
			window.addEventListener('keydown', this.onKeydown)
		},
		destroyed() {
			window.removeEventListener('keydown', this.onKeydown)
		}
	}
</script>

<style lang="scss" scoped>
	.gallery {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 4rem 0 2rem;

		&__button {
			background: $primary-color;
			box-shadow: $box-shadow;
			color: #fff;
			cursor: pointer;
			font-size: 0.9rem;
			font-weight: bold;
			letter-spacing: 0.05rem;
			padding: 0.5rem 1rem;
			text-align: center;
			text-transform: uppercase;
			transition: all 0.3s;

			&:hover {
				background: $accent-primary-color;
			}
		}

		&__grid {
			display: grid;
			gap: 1rem;
			grid-gap: 1rem;
			grid-template-columns: repeat(4, 1fr);
			margin: 2rem 0 0;

			@include tablet {
				grid-template-columns: repeat(2, 1fr);
			}

			.image-card {
				background: #fff;
				padding: 1rem;
				height: 200px;
				cursor: pointer;
				transition: all 0.3s;

				&:hover {
					padding: 1.25rem;

					img {
						opacity: 0.8;
					}
				}

				img {
					display: block;
					height: 100%;
					object-fit: cover;
					transition: all 0.3s;
					width: 100%;
				}
			}
		}

		.modal {
			background: rgba(#000, 0.7);
			display: flex;
			height: 100%;
			left: 0;
			opacity: 0;
			position: fixed;
			top: 0;
			transition: all 0.3s;
			width: 100%;
			z-index: 98;
			padding: 4rem 0 0;
			pointer-events: none;

			&.visible {
				opacity: 1;
				pointer-events: initial;
			}

			&__close {
				position: absolute;
				cursor: pointer;
				top: -2rem;
				right: 2rem;
				color: #fff;
				font-size: 3rem;

				&:hover {
					opacity: 0.8;
				}
			}

			&__content {
				display: flex;
				max-width: 800px;
				justify-content: center;
				position: relative;
				align-items: center;
				margin: auto;

				.arrow {
					cursor: pointer;

					&.invisible {
						visibility: hidden;
					}

					svg {
						fill: #fff;
						transition: all 0.3s;

						&:hover {
							fill: $accent-primary-color;
						}
					}
				}

				.image {
					padding: 1rem;

					img {
						display: block;
						box-shadow: $box-shadow;
						width: 100%;
					}
				}
			}
		}
	}
</style>