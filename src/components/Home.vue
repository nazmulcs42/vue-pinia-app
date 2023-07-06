<template>
    <div>
        <AddTodoForm></AddTodoForm>
        <TodosViewTable></TodosViewTable>
    </div>
</template>

<script>
import AddTodoForm from './todos/AddTodoForm.vue'
import TodosViewTable from './todos/TodosViewTable.vue'

export default {
    setup () {
        const name = "Home"

        return {
            name,
        }
    },
    components: { TodosViewTable, AddTodoForm }
}
</script>

<style scoped>

</style>