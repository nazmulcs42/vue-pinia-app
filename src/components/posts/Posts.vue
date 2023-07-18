<template>
    <div class="mt-5">
        <h5 class="text-center">Post List</h5>
        <span class="badge text-bg-warning mx-1">Total Posts: {{  postsCount }}</span>
        <span class="badge text-bg-warning mx-1">Total Users : {{  usersCount }}</span>
        <!-- <div v-for="post in posts" :key="post.id" class="bg-">
                <PostDetails :post="post"></PostDetails>
        </div> -->
        <DataTable :data="post" class="display">
            <thead>
                <tr>
                    <th>#</th>
                    <th>A</th>
                    <th>B</th>
                </tr>
            </thead>
        </DataTable>
    </div>
</template>

<script>
import { storeToRefs } from 'pinia'
import { usePostStore } from "../../stores/posts"
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';
 
DataTable.use(DataTablesCore);

export default {
    setup () {
        const name = "Posts"
        const postsStore = usePostStore();
        const { posts, usersCount, postsCount } = storeToRefs(postsStore);

        //Data Loading
        postsStore.getAllPosts();

        return {
            name,
            posts,
            usersCount,
            postsCount
        }
    },
    computed: {
        bindings() {
            return {
                columnKeys: ["name", "email", "registered_at", "last_access_at"],
                data: [
                    {
                        key: "name",
                        title: "Name",
                        sortable: true,
                        searchable: true,
                        index: 0
                    },
                    {
                        key: "email",
                        title: "Email",
                        sortable: true,
                        searchable: true,
                        index: 0
                    },
                    {
                        key: "registered_at",
                        title: "Registered at",
                        sortable: true,
                        searchable: true,
                        index: 0
                    },
                    {
                        key: "last_access_at",
                        title: "Last access at",
                        sortable: true,
                        searchable: true,
                        index: 0
                    },
                ]
            }
        }
    },
}
</script>

<style scoped>

</style>