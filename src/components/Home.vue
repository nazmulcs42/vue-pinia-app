<template>
    <div>
        <AddTodoForm></AddTodoForm>
        <Todos></Todos>
        
    </div>
</template>

<script>
import AddTodoForm from './todos/AddTodoForm.vue'
import Todos from './todos/Todos.vue'

export default {
    setup () {
        const name = "Home"

        return {
            name,
        }
    },
    components: { Todos, AddTodoForm }
}
</script>

<style scoped>

</style>