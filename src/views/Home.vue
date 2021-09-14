<template>
  <div class="home">
      <h1>Home</h1>
      <div v-if="posts.length" class="layout">
          <PostList :posts="posts"></PostList>
	      <TagCloud :posts="posts"></TagCloud>
      </div>
      <div v-else>
          <Spinner></Spinner>
      </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import PostList from "@/components/PostList.vue";
import PostModel from "@/model/PostModel";
import {mapState} from "vuex";
import Spinner from "@/components/Spinner.vue";
import {ref} from "vue";
import TagCloud from "@/components/TagCloud.vue";

@Options({
    components: {
	    TagCloud,
        PostList,
        Spinner,
    },
    computed: {
        ...mapState('listPost', {posts: "posts"}),
    },
})

export default class Home extends Vue {
    posts! : PostModel[];
}
</script>

<style>
.home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px
}

.layout {
	display: grid;
	grid-template-columns: 3fr 1fr;
	gap: 20px;
}


</style>
