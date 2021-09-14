<template>
	<div class="tag-cloud">
		<h3> Tags </h3>
		<div v-for="tag in tags" :key="tag">
			<router-link :to="{ name: 'Tag', params: {tag: tag }}">#{{tag}}</router-link>
		</div>
	</div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import PostModel from "@/model/PostModel";

@Options({
	props: {
		posts: Array
	}
})

export default class TagCloud extends Vue {
	posts!: PostModel[];
	tags: string[] = [];

	created() {
		const tagSet: Set<string> = new Set();
		this.posts.forEach((post: PostModel) => {
			post.tags.forEach((tag: string) => tagSet.add(tag));
		})
		this.tags = [...tagSet];
	}
}
</script>

<style>
.tag-cloud {
	padding: 10px;
}

.tag-cloud h3 {
	border-bottom: 1px solid #eee;
	padding: 16px 8px;
	color: #444;
}

.tag-cloud div {
	display: inline-block;
	padding: 10px;
}

.tag-cloud a {
	color: #ccc;
	text-decoration: none;
}

.tag-cloud a.router-link-active {
	color: #ff8800;
	font-weight: bold;
}
</style>
