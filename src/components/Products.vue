<template>
	<section class="products" :id="$t('products.id')">
		<h2>{{ $t('products.title') }}</h2>
		<h3 class="fruits-title">{{ $t('products.list.fruits.title') }}</h3>
		<div class="products__list">
			<div
				class="product fruit"
				v-for="(product, i) in $t('products.list.fruits.items')"
				:key="`prod-${i}`"
			>
				<div class="product__img">
					<img v-lazy="require(`@/assets/${product.image}`)" :alt="product.name" />
				</div>
				<h4>{{ product.name }}</h4>
				<div class="fruit__types">
					<div class="months">
						<span
							class="month-name"
							v-for="(month, i) in $t('products.months')"
							:key="`m-${i}`"
							:data-initial="month.substr(0, 1)"
							>{{ month }}</span
						>
					</div>
					<div class="type" v-for="(type, i) in product.types" :key="`type-${i}`">
						<h5>{{ type.name }}</h5>
						<div class="harvest">
							<div class="month" v-for="(month, i) in type.harvest" :key="`h-${i}`">
								<span v-if="month.pickup" class="full" />
								<span v-else class="empty" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<h3 class="wines-title">{{ $t('products.list.wines.title') }}</h3>
		<div class="products__list">
			<div
				v-for="(wine, i) in $t('products.list.wines.items')"
				:class="`product wine ${wine.type}`"
				:key="`wine-${i}`"
			>
				<div class="product__img">
					<img v-lazy="require(`@/assets/${wine.image}`)" :alt="wine.name" />
				</div>
				<h4>{{ wine.name }}</h4>
				<div class="wine__text">
					<p>{{ wine.text }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Products'
}
</script>

<style scoped lang="scss">
.products {
	background: linear-gradient($secondary-color, #fff, $wine-color);

	h2 {
		background: $accent-primary-color;
		color: #fff;
		font-size: 2.5rem;
		font-family: $light;
		font-weight: lighter;
		font-weight: 100;
		margin: 0 auto;
		max-width: $max-width;
		padding: 1rem;
		text-align: center;
	}

	h3 {
		color: #fff;
		font-size: 1.5rem;
		font-weight: normal;
		margin: 0 auto;
		max-width: $max-width;
		padding: 1rem;
		text-align: center;

		&.fruits-title {
			background: $primary-color;
		}

		&.wines-title {
			background: $wine-color;
		}
	}

	&__list {
		margin: 0 auto;
		max-width: $max-width;

		.product {
			display: grid;
			grid-template-columns: 1fr 2fr;
			grid-template-rows: 3.25rem 1fr;
			grid-template-areas:
				'img   name'
				'img   months';

			@include tablet {
				grid-template-columns: 1fr;
				grid-template-rows: auto;
				grid-template-areas:
					'img     img'
					'name    name'
					'months  months';
			}

			&__img {
				background: #333;
				grid-area: img;
				position: relative;

				@include tablet {
					height: 175px;
				}

				&:before {
					bottom: 0;
					box-shadow: $inset-shadow;
					content: '';
					height: 100%;
					left: 0;
					position: absolute;
					right: 0;
					top: 0;
				}

				img {
					display: block;
					height: 100%;
					object-fit: cover;
					width: 100%;

					@include tablet {
						opacity: 0.8;
					}
				}
			}

			h4 {
				color: #fff;
				font-size: 1.25rem;
				grid-area: name;
				letter-spacing: 0.05rem;
				line-height: 1;
				margin: 0;
				padding: 1rem;
				padding: 1rem;
				text-shadow: $text-shadow;
				text-transform: uppercase;

				@include tablet {
					position: relative;
					top: -4rem;
					text-align: center;
				}
			}

			&.fruit {
				background: lighten($accent-primary-color, 10);

				&:nth-child(even) {
					background: lighten($primary-color, 10);
				}

				.fruit__types {
					display: grid;
					grid-area: months;
					grid-template-columns: 1fr 3fr;
					grid-auto-rows: min-content;

					@include tablet {
						position: relative;
						top: -2rem;
						text-align: center;
					}

					.months {
						align-self: flex-end;
						color: #fff;
						display: grid;
						grid-column: 2/-1;
						grid-template-columns: repeat(12, 1fr);

						span {
							text-align: center;

							@include tablet {
								font-size: 0;

								&:before {
									content: attr(data-initial);
									display: block;
									font-size: 1rem;
								}
							}
						}
					}

					.type {
						border-bottom: 1px solid #fff;
						display: grid;
						grid-column: 1/-1;
						grid-template-columns: 1fr 3fr;

						h5 {
							opacity: 0.8;
							margin: 0;
							padding: 0.5rem 1rem;

							@include tablet {
								text-align: left;
								line-height: 1.1;
								min-height: 45px;
								display: flex;
								align-items: center;
							}
						}

						.harvest {
							display: grid;
							grid-template-columns: repeat(12, 1fr);

							.month {
								display: flex;

								span {
									color: #fff;
									font-size: 1.25rem;
									margin: auto;

									&.full {
										&:before {
											content: '●';
										}
									}

									&.empty {
										&:before {
											content: '○';
										}
									}
								}
							}
						}
					}
				}
			}

			&.wine {
				&.red {
					background: lighten($wine-color, 20);

					&:nth-child(even) {
						background: lighten($wine-color, 30);
					}
				}

				&.white {
					background: darken($white-wine-color, 5);

					&:nth-child(even) {
						background: $white-wine-color;
					}
				}

				.wine__text {
					padding: 1rem;

					@include tablet {
						position: relative;
						top: -2rem;
					}

					p {
						color: #fff;
						margin: 0 0 1rem;
					}
				}
			}
		}
	}
}
</style>
