<template>
    <div class="mt-3">
      <h5 class="text-center">Daily Task List</h5>
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
            <tr v-for="todo in todosStore.todos" :key="todo.id">
              <td class="text-center">{{ todo.id }}</td>
              <td>{{ todo.title }}</td>
              <td class="text-center pt-3">
                <span class="alert alert-success py-2" v-if="todo.completed == true">Finished</span>
                <span class="alert alert-danger py-2" v-if="todo.completed == false">Pending</span>
              </td>
              <td class="text-center">
                <button class="btn btn-sm btn-outline-info m-1">Change</button>
                <button class="btn btn-sm btn-outline-success m-1">View</button>
                <button class="btn btn-sm btn-outline-primary m-1">Edit</button>
                <button class="btn btn-sm btn-outline-danger m-1">Delete</button>
              </td>
            </tr>
          </tbody>
  
        </table>
      </div>
    </div>
</template>

<script>
import { useTodosStore } from '../../stores/todos'


export default {
    setup () {
        const name = "Todos View Table";
        const todosStore = useTodosStore();

        return {
            name,
            todosStore
        }
    }
}
</script>

<style lang="scss" scoped>

</style>