<template>
  <div class="home">
      <h1>Home</h1>
      <div v-if="posts.length">
          <PostList :posts="posts"></PostList>
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
import {mapActions, mapState} from "vuex";
import Spinner from "@/components/Spinner.vue";

@Options({
    components: {
        PostList,
        Spinner,
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
