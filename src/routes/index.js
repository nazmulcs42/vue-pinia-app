import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue'
import EditTodoForm from '../components/todos/EditTodoForm.vue'
import TodoDetails from '../components/todos/TodoDetails.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/todos/:id/edit', name: "Edit", component: EditTodoForm },
    { path: '/todos/:id/details', name: "Details", component: TodoDetails },
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })


  export default router;