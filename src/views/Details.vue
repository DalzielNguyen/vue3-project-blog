<template>
    <div v-if="post" class="post">
        <h3>{{ post.title }}</h3>
        <p class="pre"> {{ post.body }}</p>
    </div>
    <div v-else>
        <spinner></spinner>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import PostModel from "@/model/PostModel";
import {mapActions} from "vuex";
import Spinner from "@/components/Spinner.vue";

@Options({
    components: {Spinner},
    props: {
        id: String,
    },
    methods:{
        ...mapActions('listPost', {fetchPost: 'fetchPost'}),
    },
})

export default class Details extends Vue {
    id!: string;
    post: PostModel = {
        id: "",
        body: "",
        title: "",
        tags: []
    };
    fetchPost!: (id: string) => Promise<PostModel>;

    async created() {
        this.post = await this.fetchPost(this.id);
        if(!this.post){
            console.log('error');
        }
    }
}
</script>

<style scoped>

</style>
