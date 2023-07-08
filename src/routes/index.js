import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue'
import EditTodoForm from '../components/todos/EditTodoForm.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/todos/:id/edit', name: "edit", component: EditTodoForm },
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })


  export default router;