<template>
	<section class="contact" :id="$t('contact.id')">
		<GmapMap
			class="gmap"
			:center="{ lat: -32.890246, lng: -68.801479 }"
			:zoom="15"
			:options="{ styles: mapStyle }"
		>
			<GmapMarker
				:position="google && new google.maps.LatLng(-32.890246, -68.801479)"
				:clickable="true"
				:draggable="true"
				:options="{
					icon: {
						url: `https://maps.google.com/mapfiles/ms/icons/blue-dot.png`
					}
				}"
			/>
		</GmapMap>

		<div class="contact__content">
			<h2>{{ $t('contact.title') }}</h2>
			<div class="contact-info">
				<p>Mercado Cooperativo Guaymallén, p 316-318</p>
				<a href="mailto:info@argentinaproduce.com">info@argentinaproduce.com</a>
				<a href="Tel:542614450319">Tel.: 54 261 445 0319</a>
			</div>
			<form class="contact-form" @submit.prevent="handleSubmit">
				<div class="field name">
					<input type="text" name="name" id="name" class="input" required />
					<label for="name">{{ $t('contact.form.name') }}</label>
				</div>
				<div class="field email">
					<input type="text" email="email" id="email" class="input" required />
					<label for="email">{{ $t('contact.form.email') }}</label>
				</div>
				<div class="field msg">
					<textarea name="message" id="message" class="input" required></textarea>
					<label for="message">{{ $t('contact.form.message') }}</label>
				</div>
				<input type="submit" :value="$t('contact.form.send')" class="submit" />
			</form>
		</div>
	</section>
</template>

<script>
import { gmapApi } from 'vue2-google-maps'
import { submitFormData } from 'submit-form-data'

export default {
	name: 'Contact',
	data() {
		return {
			mapStyle: [
				{
					featureType: 'landscape',
					stylers: [{ color: '#fdce33' }, { lightness: 50 }]
				},
				{
					featureType: 'administrative.locality',
					elementType: 'labels.text.fill',
					stylers: [{ color: '#208dc1' }]
				},
				{
					featureType: 'road.arterial',
					elementType: 'labels.text.fill',
					stylers: [{ color: '#208dc1' }]
				},
				{
					featureType: 'road.arterial',
					elementType: 'labels.text.stroke',
					stylers: [{ color: '#fdce33' }, { lightness: 50 }]
				},
				{
					featureType: 'road',
					elementType: 'geometry.fill',
					stylers: [{ color: '#f4aa34' }]
				},
				{
					featureType: 'road.local',
					elementType: 'labels.text.fill',
					stylers: [{ color: '#414141' }]
				},
				{
					featureType: 'road.local',
					elementType: 'labels.text.stroke',
					stylers: [{ color: '#fdce33' }, { lightness: 50 }]
				}
			]
		}
	},
	computed: {
		google: gmapApi
	},
	methods: {
		handleSubmit() {
			const form = document.querySelector('.contact-form')
			const settings = {
				dest: 'process_data.php',
				fields: '.input',
				successMsg: 'Message sent!',
				errorMsg: 'There was an error',
				sending: 'Sending message...',
				reciever: 'penhold3r@gmail.com'
			}

			submitFormData(form, settings)
		}
	}
}
</script>

<style lang="scss">
.contact {
	background: $primary-color;
	padding: 0 0 2rem;

	.gmap {
		border-top: 1px solid $secondary-color;
		border-bottom: 1px solid $secondary-color;
		height: 300px;
		width: 100%;
	}

	&__content {
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: 1fr 1fr;
		margin: 0 auto;
		max-width: 680px;
		padding: 1rem;

		@include tablet {
			grid-template-columns: 1fr;
		}

		h2 {
			align-self: start;
			color: #fff;
			font-family: $light;
			font-size: 2.5rem;
			font-weight: 100;
			font-weight: lighter;
			margin: 0;

			@include tablet {
				font-size: 2rem;
			}
		}

		.contact-info {
			padding-top: 1rem;

			@include tablet {
				padding: 0;
			}

			p {
				color: #fff;
				margin: 0 0 0.5rem;
			}

			a {
				color: darken($secondary-color, 10);
				display: block;
				margin: 0;
				padding: 0.25rem 0;
				text-decoration: none;
				transition: all 0.3s;
				width: max-content;

				&:hover {
					background: rgba(#fff, 0.5);
					color: $secondary-color;
					padding: 0.25rem 0.5rem;
				}
			}
		}

		form {
			display: grid;
			grid-gap: 1rem;
			grid-template-columns: 1fr 1fr;
			grid-template-areas:
				'name    msg'
				'email   msg'
				'.       send';
			grid-column: 1/-1;
			position: relative;

			@include tablet {
				grid-template-columns: 1fr;
				grid-template-areas:
					'name    name'
					'email   email'
					'msg     msg'
					'send    send';
			}

			.field {
				position: relative;
				width: 100%;

				label {
					border: 3px solid transparent;
					color: $secondary-color;
					position: absolute;
					padding: 0.3rem 0.5rem;
					left: 0;
					top: 0;
					height: 100%;
					width: 100%;
					transition: all 0.3s;
					user-select: none;
				}

				.input {
					border: 3px solid transparent;
					background: rgba(#fff, 0.7);
					color: #666;
					height: 100%;
					padding: 0.3rem 0.5rem;
					transition: all 0.3s;
					width: 100%;

					&:focus {
						border: 3px solid $secondary-color;
						background: #fff;
					}

					&:focus + label,
					&:valid + label {
						color: transparent;
						padding: 0.3rem 1.5rem;
						pointer-events: none;
					}
				}

				&.name {
					grid-area: name;
				}
				&.email {
					grid-area: email;
				}
				&.msg {
					grid-area: msg;

					textarea {
						resize: none;
					}
				}
			}

			.submit {
				align-self: start;
				background: $secondary-color;
				border: 1px solid $secondary-color;
				color: #fff;
				cursor: pointer;
				grid-area: send;
				padding: 0.5rem;
				text-transform: uppercase;
				transition: all 0.3s;

				&:hover {
					background: $accent-primary-color;
					color: $secondary-color;
				}
			}

			.output-msg {
				background: #fff;
				border: 1px solid $secondary-color;
				opacity: 0;

				&.visible {
					animation: fadeMsg 0.4s linear forwards;

					p {
						transform: translateX(0);
					}
				}

				p {
					margin: 0;
					padding: 0.5rem;
					transform: translateX(1.5rem);
					transition: all 0.5s;

					&.msg-error {
						color: tomato;
					}
				}
			}
		}
	}
}

@keyframes fadeMsg {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
</style>
