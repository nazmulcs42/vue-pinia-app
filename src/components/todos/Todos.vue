<template>
    <div class="mt-3">
      <h5 class="text-center">Daily Task List</h5>
      <!-- <button class="btn btn-outline-warning" @click="todosStore.$reset">Reset</button> -->
      <!-- <button type="button" class="btn btn-md btn-outline-info text-white w-5 ml-auto" data-toggle="modal" data-target="#exampleModalLong">Add New Todo</button> -->
      <span class="badge text-bg-warning mx-1">Total : {{  todosStore.totalTodosCount }}</span>
      <span class="badge text-bg-warning mx-1">Completed : {{  todosStore.completedTodosCount }}</span>
      <span class="badge text-bg-warning mx-1">Incompleted : {{  todosStore.inCompletedTodosCount }}</span>
      <div class="table-responsive mt-3">
        <table class="table table-md table-hover table-striped">
          <thead>
            <tr>
              <th class="text-center">#</th>
              <th class="text-left">Task Name</th>
              <th class="text-center">Status</th>
              <th class="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(todo, index) in todosStore.todos" :key="index">
              <td class="text-center">{{ index + 1 }}</td>
              <td>{{ todo.title }}</td>
              <td class="text-center pt-3">
                <span class="alert alert-success py-2" v-if="todo.completed == true">Finished</span>
                <span class="alert alert-danger py-2" v-if="todo.completed == false">Pending</span>
              </td>
              <td class="text-center">
                <button class="btn btn-sm btn-outline-info m-1" @click="changeTodoStatus(todo.id)">Change</button>
                <button class="btn btn-sm btn-outline-success m-1" @click="viewTodo(todo.id)">View</button>
                <button class="btn btn-sm btn-outline-primary m-1" @click="editTodo(todo.id)">Edit</button>
                <button class="btn btn-sm btn-outline-danger m-1" @click="deleteTodo(todo.id)">Delete</button>
              </td>
            </tr>
          </tbody>
  
        </table>
      </div>
    </div>
</template>

<script>
import { useTodosStore } from '../../stores/todos';
import { useRouter } from 'vue-router';



export default {

    setup () {
        const name = "Todos View Table";
        const todosStore = useTodosStore();
        const router = useRouter();

        const editTodo = (todoId) => {
              router.push({ name: 'Edit', params: { id: todoId } });
              // todosStore.updateTodo(todoId, {title: "nnnn"})
              // todosStore.todo = todosStore.todos.find(todo => todo.id === todoId);
        };
        const deleteTodo = (todoId) => {
            if(confirm("Are you sure?")){
              todosStore.removeTodo(todoId);
            }
        };
        const changeTodoStatus = (todoId) => {
          if(confirm("Are you sure?")){
            todosStore.updateTodoStatus(todoId)
          }
        };
        const viewTodo = (todoId) => {
          router.push({ name: 'Details', params: { id: todoId } });
        }
        return {
            name,
            todosStore,
            editTodo,
            deleteTodo,
            changeTodoStatus,
            viewTodo
        }
    },
    methods: {
      // editTodo: (todoId) => {
      //       const router = useRouter();
      //       router.push({ name: 'edit', params: { id: todoId } });
      //       // const todosStore = useTodosStore();
      //       // todosStore.updateTodo(todoId, {title: "nnnn"})
      //       // todosStore.todo = todosStore.todos.find(todo => todo.id === todoId);
      // },
      // deleteTodo : (todoId) => {
      //     if(confirm("Are you sure?")){
      //       const todosStore = useTodosStore();
      //       todosStore.removeTodo(todoId);
      //     }
      // }
    },
    created () {
      const todosStore = useTodosStore();
      todosStore.getTodoList();
    },
}
</script>

<style scoped>

</style>