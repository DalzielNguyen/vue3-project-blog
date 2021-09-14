<template>
    <div class="create">
        <form @submit.prevent="handleSubmit">
            <label>Title:</label>
            <input v-model="title" type="text" required>
            <label>Content:</label>
            <textarea v-model="body" required></textarea>
            <label> Tags (hit enter to add a tag)</label>
            <input
                v-model="tag"
                type="text"
                @keydown.enter.prevent="handleKeydown"
            >
            <div v-for="tag in tags" :key="tag" class="pill">
                #{{ tag }}
            </div>
            <button> Add Post</button>
        </form>
    </div>
</template>

<script lang="ts">
import PostModel from "@/model/PostModel";
import {Options, Vue} from "vue-class-component";
import {Router, useRouter} from "vue-router";
import {mapActions} from "vuex";

@Options({
    methods: {
        ...mapActions("listPost", {submitPost: "submitPost"}),
    }
})
export default class Create extends Vue {
    title: string = "";
    body: string = "";
    tags: string[] = [];
    tag: string = "";
    submitPost!: (post: PostModel) => Promise<boolean>;
	router!: Router;

	created(){
		this.router =useRouter();
	}
    handleKeydown(){
        if(!this.tags.includes(this.tag)) {
            this.tag = this.tag.replace(/\s/,'');
            this.tags.push(this.tag);
        }
        this.tag = '';
    }

    async handleSubmit() {
        const post: PostModel = {
            id: "",
            title: this.title,
            body: this.body,
            tags: this.tags
        }
        const result: boolean = await this.submitPost(post);
        if(result){
			await this.router.push({name: "Home"});
        }
    }
}
</script>

<style>
form {
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
}

input, textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #eee;
}

textarea {
    height: 160px;
}

label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
}

label::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1.5deg);
}

button {
    display: block;
    margin-top: 30px;
    background: #ff8800;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px;
}

.pill {
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
}

</style>
