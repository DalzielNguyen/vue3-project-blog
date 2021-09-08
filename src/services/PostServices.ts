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
};

