<template>
  <div class="home">
      <h1>Home</h1>
      <PostList v-if="showPosts" :posts="posts"></PostList>
      <button @click="showPosts = !showPosts">toggle posts</button>
      <button @click="posts.pop()">delete a post</button>
  </div>
</template>

<script lang="ts">
import { ref, watch} from 'vue';
import { Options, Vue } from 'vue-class-component';
import PostList from "@/components/PostList.vue";
import PostModel from "@/model/PostModel";
import {mapActions, mapState} from "vuex";

@Options({
    components: {
        PostList
    },
    computed: {
        ...mapState('listPost', {posts: "posts"}),
    },
    methods: {
        ...mapActions('listPost', { fetchData: "fetchData"}),
    },
})
export default class Home extends Vue {
    posts!:PostModel[];
    showPosts: boolean = true;
    fetchData!: () => Promise<void>;
    async created() {
        await this.fetchData();
    }
}
</script>
