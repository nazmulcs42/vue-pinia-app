<template>
    <div class="container w-50 bg-white text-center p-3 mt-5">
        <h3 class="text-dark">Task Details</h3>
        <h5 class="text-primary text-start"> Task No- {{ todo.id }}</h5>
        <h5 class="text-primary text-start"> Task-  {{ todo.title }}</h5>
        <p class="text-info mt-5">
            <span class='alert alert-success' v-if="todo.completed">{{ statusText }}</span>
            <span class='alert alert-warning' v-if="!todo.completed">{{ statusText }}</span>
        </p>
    </div>
</template>

<script>
import { storeToRefs } from 'pinia';
import { useTodosStore } from '../../stores/todos'
import { useRouter } from 'vue-router';

export default {
    setup () {
        const name = "Todo Details"
        const todosStore = useTodosStore();
        const router = useRouter();
        const todoId = router.currentRoute.value.params.id;
        todosStore.getTodoDetails(todoId);
        const { todo } = storeToRefs(todosStore);
        
        return {
            name,
            todo
        }
    },
    computed: {
        statusText(){
            if(this.todo.completed) {
                return "Finished";
            } else {
                return "Pending";
            }
        }
    },
    // created () {
    //     const todosStore = useTodosStore();
    //     const router = useRouter();
    //     const todoId = router.currentRoute.value.params.id;
    //     todosStore.getTodoDetails(todoId);
    // },
}
</script>

<style scoped>

</style>