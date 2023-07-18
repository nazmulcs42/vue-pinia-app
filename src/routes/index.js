import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue'
import EditTodoForm from '../components/todos/EditTodoForm.vue'
import TodoDetails from '../components/todos/TodoDetails.vue'
import TodosVue from '../components/todos/Todos.vue';
import PostsVue from '../components/posts/Posts.vue';
import CalendarVue from '../components/calendar/Calendar.vue';
import Demo from "../components/demo/Demo.vue"

const routes = [
    { path: '/', component: Home },
    { path: '/todos', name: "Tasks", component: TodosVue },
    { path: '/todos/:id/edit', name: "Edit", component: EditTodoForm },
    { path: '/todos/:id/details', name: "Details", component: TodoDetails },
    { path: '/posts', name: "Posts", component: PostsVue },
    { path: '/posts/:id/edit', name: "PostEdit", component: TodoDetails },
    { path: '/posts/:id/details', name: "PostDetails", component: TodoDetails },
    { path: '/calendar', name: "Calendar", component: CalendarVue },
    { path: '/demo/test', name: "Demo", component: Demo },
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })


  export default router;