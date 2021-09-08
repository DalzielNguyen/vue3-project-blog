import { createStore } from 'vuex'
import listPost from "@/store/ListPost";

export default createStore({
  modules: {
      listPost,
  }
});
