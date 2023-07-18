import { defineStore } from "pinia";
import axios from 'axios';


export const usePostStore  = defineStore("postsStore", {
    state: () => {
        return {
            posts: [],
            post: {}
        }
    },
    getters: {
        postsCount() {
            return this.posts.length;
        },
        usersCount() {
            let usersCount = 0
            let preUserId = 0;
            this.posts.forEach(post => {
               if( post.userId != preUserId ) {
                 usersCount ++;
                 preUserId = post.userId;
               }
            });

            return usersCount;
        }
    },
    actions: {
        //List API
        async getAllPosts () {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            if(response.data.length > 0){
                this.posts = response.data;
            }
        }
    },
})