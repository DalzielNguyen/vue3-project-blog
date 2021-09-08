import {ActionTree, GetterTree, Module, MutationTree} from "vuex";
import {ListPostModel} from "@/model/ListPostModel";
import PostModel from "@/model/PostModel";
import PostServices from "@/services/PostServices";

const state: ListPostModel = {
    posts: []
}

const getters: GetterTree<ListPostModel, PostModel> = {}

const mutations: MutationTree<ListPostModel> = {
    setPosts(state: any, posts: PostModel[]) {
        state.posts = posts;
    }
}

const actions: ActionTree<ListPostModel, PostModel> = {
    async fetchData({commit}): Promise<void> {
        const posts: PostModel[] = await PostServices.fetchData();
        console.log(posts);
        commit("setPosts", posts);
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
