<template>
	<div class="tag">
		<div v-if="!postsWithTag.length">
			No post in this tag
		</div>
		<div v-if="posts.length" class="layout">
			<PostList :posts="postsWithTag"></PostList>
			<TagCloud :posts="posts"></TagCloud>
		</div>
		<div v-else>
			<Spinner/>
		</div>
	</div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import Spinner from "@/components/Spinner.vue";
import PostList from "@/components/PostList.vue";
import TagCloud from "@/components/TagCloud.vue";
import {mapActions, mapState} from "vuex";
import PostModel from "@/model/PostModel";

@Options({
	components: {
		Spinner,
		PostList,
		TagCloud,
	},
	computed: {
		...mapState('listPost', {posts: "posts"}),
	},
	methods: {
		...mapActions('listPost', {fetchData: "fetchData"}),
	}
})

export default class Tag extends Vue {
	posts!: PostModel[];
	postsWithTag: PostModel[] = [];
	fetchData!: () => Promise<void>;

	async created() {
		await this.fetchData();
		this.postsWithTag = this.posts.filter((post:PostModel) => {
			return post.tags.includes((this.$route.params.tag) as string);
		})
	}
}
</script>

<style>
.tag {
	max-width: 1200px;
	margin: 0 auto;
	padding: 10px;
}
</style>
