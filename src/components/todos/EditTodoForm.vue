<template>
    <div class="col-md-12 mt-5 w-50 mx-auto">
        <!-- <h5 class="text-start text-info mb-3">Update Todo Form</h5> -->
        <form method="PATCH" @submit.prevent="updateFormData" @reset="onReset" id="editNewTodoFormId" >
            <fieldset>
                <legend class="text-start text-info mb-3">Update Todo Form:</legend>
            <div class="row">
                <div class="mb-3">
                    <label for="title" class="form-label mx-2">Task Title</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="title" 
                        v-model="todosStore.todo.title" 
                        placeholder="Enter Task Name" 
                        aria-label="Enter Task Name"
                    >
                </div>
                <button type="submit" class="btn btn-md btn-outline-warning px-4 mx-3 w-25">Save Changes</button>
            </div>
            </fieldset>
        </form>
    </div>
</template>

<script>
import { useTodosStore } from '../../stores/todos'
import { useRouter } from 'vue-router';

export default {
    setup () {
        const name = "Add Todo Form"
        const todosStore = useTodosStore();
        const router = useRouter();
        const todoId = router.currentRoute.value.params.id
       
        const updateFormData = (event) => {
            const form = event.target;
            const title = form.title.value;
            todosStore.updateTodo(todoId, { title: title})
            form.reset()
            router.push('/');
        }
        return {
            name,
            todoId,
            todosStore,
            updateFormData,
        }
    },
    created () {
        const todosStore = useTodosStore();
        const todo  = todosStore.getTodoDetails(this.todoId);
        // todo.then(data => {
        //     const titleField = document.getElementById("title");
        //     titleField.value  = data.title;
        // });
    },
    methods: {
      onSubmit(event) {
        const form = event.target;
        const title = form.title.value;
        const newTodo = {
            userId: 1,
            title: title,
            completed: false
        };

        const todosStore = useTodosStore();
        const response = todosStore.addTodo(newTodo);
        console.log(response);
        form.reset();

      },
      onReset(event) {
        event.target.reset();
      }
    }
}
</script>

<style scoped>

</style>