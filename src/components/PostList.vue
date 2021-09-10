<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post">
            <SinglePost :post="post"></SinglePost>
        </div>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import PostModel from "@/model/PostModel";
import SinglePost from "@/components/SinglePost.vue";
@Options({
    components: {
        SinglePost
    },
    props: {
        posts: Array,
    }
})

export default class PostList extends Vue {
    posts!: PostModel[];

    updated(){
        console.log("updated");
    }
}
</script>

<style scoped>

</style>
