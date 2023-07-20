import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue'
import EditTodoForm from '../components/todos/EditTodoForm.vue'
import TodoDetails from '../components/todos/TodoDetails.vue'
import TodosVue from '../components/todos/Todos.vue';
import PostsVue from '../components/posts/Posts.vue';
import CalendarVue from '../components/calendar/Calendar.vue';
import Demo from "../components/demo/Demo.vue"
import MarkdownVue from "../components/markdown/Markdown.vue"
import DebounceVue from "../components/debounce/Debounce.vue"

const routes = [
    { path: '/', component: Home },
    { path: '/todos', name: "Tasks", component: TodosVue },
    { 
      path: '/todos/:id', 
      name: "TaskActions", 
      children:[
        { path: 'edit', name: "Edit", component: EditTodoForm },
        { path: 'details', name: "Details", component: TodoDetails },
      ]
    },
    { path: '/posts', name: "Posts", component: PostsVue },
    { 
      path: '/posts/:id', 
      name: "PostActions", 
      children:[
        { path: 'edit', name: "PostEdit", component: TodoDetails },
        { path: 'details', name: "PostDetails", component: TodoDetails },
      ]
    },
    { 
      path: "/manager",
      name: "Manager",
      children:[
        { path: 'calendar', name: "Calendar", component: CalendarVue },
        { path: 'markdown', name: "Markdown", component: MarkdownVue },
        { path: 'debounce', name: "Debounce", component: DebounceVue },
      ]
    },
    { path: '/demo/test', name: "Demo", component: Demo }
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })


  export default router;