<template>
    <div class="post">
        <h3> {{ post.title }}</h3>
        <p>{{snippet}}</p>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import PostModel from "@/model/PostModel";

@Options({
    props: {
        post: Object,
    }
})

export default class SinglePost extends Vue {
    post!: PostModel;

    get snippet(): string {
        return this.post.body.substring(0, 100) + '...';
    }
}
</script>

<style scoped>

</style>
