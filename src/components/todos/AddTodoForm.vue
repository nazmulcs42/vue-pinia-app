<template>
    <div class="col-md-12 mt-5">
        <!-- <h5 class="text-center text-info mb-3 w-25">New Todo Form</h5> -->
        <form method="POST" @submit="onSubmit" @reset="onReset" id="AddNewTodoFormId" >
            <div class="row">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" name="title" value="" placeholder="Enter Task Name" aria-label="Enter Task Name" aria-describedby="basic-addon2">
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
import axios from "axios"

export default {
    setup () {
        const name = "Add Todo Form"

        return {
            name,
        }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        const task = {
            title: event.target.title.value,
            completed: false
        }
        // implement pinia actions method call for add new todo item.
        //const response = axios.post("https://jsonplaceholder.typicode.com/todos", task);
        event.target.reset()

      },
      onReset(event) {
        event.preventDefault()
        event.target.reset()
        // event.target.title.value = ""
      }
    }
}
</script>

<style scoped>

</style>