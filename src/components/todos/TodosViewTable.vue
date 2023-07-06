<template>
    <div class="mt-3">
      <h5 class="text-center">Daily Task List</h5>
      <!-- <button type="button" class="btn btn-md btn-outline-info text-white w-5 ml-auto" data-toggle="modal" data-target="#exampleModalLong">Add New Todo</button> -->
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
            <tr>
              <td class="text-center">01</td>
              <td>Morning walking at 6.30 am</td>
              <td class="text-center pt-3">
                <span class="alert alert-success py-2">Finished</span>
              </td>
              <td class="text-center">
                <button class="btn btn-sm btn-outline-info m-1">Change</button>
                <button class="btn btn-sm btn-outline-success m-1">Edit</button>
                <button class="btn btn-sm btn-outline-danger m-1">Delete</button>
              </td>
            </tr>
            <tr>
              <td class="text-center">02</td>
              <td>Breakfast at 8.30 am</td>
              <td class="text-center pt-3">
                <span class="alert alert-success py-2">Finished</span>
              </td>
              <td class="text-center">
                <button class="btn btn-sm btn-outline-info m-1">Change</button>
                <button class="btn btn-sm btn-outline-success m-1">Edit</button>
                <button class="btn btn-sm btn-outline-danger m-1">Delete</button>
              </td>
            </tr>
            <tr>
              <td class="text-center">03</td>
              <td>Going to school at 9.30 am</td>
              <td class="text-center pt-3">
                <span class="alert alert-danger py-2">Pending</span>
              </td>
              <td class="text-center">
                <button class="btn btn-sm btn-outline-info m-1">Change</button>
                <button class="btn btn-sm btn-outline-success m-1">Edit</button>
                <button class="btn btn-sm btn-outline-danger m-1">Delete</button>
              </td>
            </tr>
            <!-- <tr v-for="todo in todos" :key="todo.id">
              <td class="text-center">{{ todo.id }}</td>
              <td>{{ todo.title }}</td>
              <td class="text-center pt-3">
                <span class="alert alert-success py-2" v-if="todo.completed == true">Finished</span>
                <span class="alert alert-danger py-2" v-if="todo.completed == false">Pending</span>
              </td>
              <td class="text-center">
                <button class="btn btn-sm btn-outline-info m-1">Change</button>
                <button class="btn btn-sm btn-outline-success m-1">Edit</button>
                <button class="btn btn-sm btn-outline-danger m-1">Delete</button>
              </td>
            </tr> -->
          </tbody>
  
        </table>
      </div>
    </div>
</template>

<script>
export default {
    setup () {
        const name = "Todos View Table"

        return {
            name,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>