import PostModel from "@/model/PostModel";
import {SERVER_URL} from "@/constants/constants";

export default new class PostServices {
    async fetchData(): Promise<PostModel[]> {
        try {
            let data: any = await fetch(SERVER_URL);
            if (!data.ok) {
                throw Error("no data available")
            }
            return await data.json();
        } catch(error) {
            error.value = error.message;
            console.log(error.message);
        }
        return []
    }

    async fetchPost(id: string): Promise<PostModel> {
        try {
            let data: any = await fetch(SERVER_URL + `/${id}`);
            if (!data.ok) {
                throw  Error('No data available');
            }
            return await data.json();
        } catch (error) {
            error.value = error.message;
            console.log(error.message);
        }
        return {} as PostModel;
    }

    async submitPost(post: PostModel): Promise<boolean> {
        try {
            let response = await fetch(SERVER_URL, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: post.title,
                    body: post.body,
                    tags: post.tags
                })
            })
            if (!response.ok) {
                throw  Error('Error to send data');
            }
            return true;
        } catch (error) {
            console.log(error.message);
        }
        return false;
    }
    
};

