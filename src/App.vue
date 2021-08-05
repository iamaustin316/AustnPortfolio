<template>
	<Nav></Nav>
	<router-view v-slot="{ Component }">
		<transition name="moveUp" mode="out-in">
			<component :is="Component" />
		</transition>
	</router-view>
</template>

<script>
import Nav from './components/Nav.vue'
export default {
	components: {
		Nav
	}
}
</script>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@500&family=STIX+Two+Text&display=swap');
	:root {
		font-size: 62.5%;
	}
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-weight: 500;
	}
	html {
		margin: 0;
		padding: 0;
		background-color: #f7f7f7;
		font-family: 'STIX Two Text', 'Noto Serif TC', serif;
		font-weight: 500;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	body {
		margin: 0;
		padding: 0;
	}
	.moveUp-enter-active {
		animation: fadeIn 600ms ease-out;
	}
	@keyframes fadeIn {
		0% {
			transform: translate3d(-100%,0,0);
		}
		100% {
			transform: translate3d(0,0,0);
		}
	}
	.moveUp-leave-active {
		animation: fadeOut 600ms ease-in;
	}
	@keyframes fadeOut {
		0% {
			transform: translate3d(0,0,0);
		}
		100% {
			transform: translate3d(100%,0,0);
		}
	}
</style>
