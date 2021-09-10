import {ActionTree, GetterTree, Module, MutationTree} from "vuex";
import {ListPostModel} from "@/model/ListPostModel";
import PostModel from "@/model/PostModel";
import PostServices from "@/services/PostServices";

const state: ListPostModel = {
    posts: [],
    error: ''
}

const getters: GetterTree<ListPostModel, PostModel> = {}

const mutations: MutationTree<ListPostModel> = {
    setPosts(state: any, posts: PostModel[]) {
        state.posts = posts;
    },
    setError(state: any, error: string) {
        state.error = error;
    }
}

const actions: ActionTree<ListPostModel, PostModel> = {
    async fetchData({commit}): Promise<void> {
        try {
            const posts: PostModel[] = await PostServices.fetchData();
            commit("setPosts", posts);
            if(posts) {
                commit('setError', "No data");
            }
        } catch (error) {
            error.value = error.message;
            commit('setError', error.value);
        }
    },

    async fetchPost({commit}, id: string): Promise<PostModel> {
        try {
            const post: PostModel = await PostServices.fetchPost(id);
            if (post) {
                return post;
            }
        } catch (error){
            commit('setError', "No value");
        }
        return {} as PostModel;
    }
}

const listPost: Module <ListPostModel, PostModel> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

export default listPost;
