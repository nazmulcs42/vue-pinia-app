<template>
    <div class="col-md-12 mt-5">
        <!-- <h5 class="text-center text-info mb-3 w-25">New Todo Form</h5> -->
        <form method="POST" @submit.prevent="onSubmit" @reset="onReset" id="AddNewTodoFormId" >
            <div class="row">
                <div class="input-group mb-3">
                    <input 
                    type="text"
                     class="form-control" 
                     name="title" 
                     v-model="title" 
                     placeholder="Enter Task Name" 
                     aria-label="Enter Task Name" 
                     aria-describedby="basic-addon2">
                    <span class="input-group-text p-0" id="basic-addon2">
                        <button type="submit" class="btn btn-md btn-primary px-4 mr-2">Save</button>
                        <button type="reset" class="btn btn-md btn-warning px-4">Reset</button>
                    </span>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { useTodosStore } from '../../stores/todos'
import { ref } from 'vue'

export default {
    setup () {
        const name = "Add Todo Form"
        const title = ref('')
        return {
            name,
            title
        }
    },
    methods: {
      onSubmit(event) {
        const form = event.target;
        // const title = form.title.value;
        const newTodo = {
            userId: 1,
            title: this.title,
            completed: false
        };

        const todosStore = useTodosStore();
        const response = todosStore.addTodo(newTodo);
        console.log(response);
        form.reset();

      },
      onSubmit_(event) {
        const form = event.target;
        const title = form.title.value;
        const newTodo = {
            userId: 1,
            title: title,
            completed: false
        };

        const todosStore = useTodosStore();
        const response = todosStore.addTodo(newTodo);
        response.then(res => {
            todosStore.todos.unshift(res.data);
        })
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