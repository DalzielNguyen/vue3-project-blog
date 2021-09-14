<template>
	<Navbar></Navbar>
  <router-view/>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import Navbar from "@/components/Navbar.vue";
import {mapActions} from "vuex";

@Options({
	components: {Navbar},
	methods: {
		...mapActions('listPost', { fetchData: "fetchData"}),
	},
})

export default class App extends Vue {
	fetchData!: () => Promise<void>;
	async created() {
		await this.fetchData();
	}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
