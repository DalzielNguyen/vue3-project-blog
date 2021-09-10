import PostModel from "@/model/PostModel";

export interface ListPostModel {
    posts: PostModel[];
    error: string;
}
