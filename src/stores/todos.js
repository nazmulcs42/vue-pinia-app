import { defineStore } from "pinia";
import axios from "axios"


export const useTodosStore  = defineStore("todosStore", {
    state: () => {
        return {
            todos: [],
            todo: []
        }
    },
    getters: {
        completedTodos: state => {
            return state.todos.filter(todo => todo.completed === true)
        },
        inCompletedTodos: state => {
            return state.todos.filter(todo => todo.completed === false)
        },
        completedTodosCount: state => {
            return state.todos.reduce((count, curr) => {
                return curr.completed === true ? count + 1 : count;
            }, 0)
        },
        inCompletedTodosCount: state => {
            return state.todos.reduce((count, curr) => {
                return curr.completed === false ? count + 1 : count;
            }, 0)
        },
        totalTodosCount: state => state.todos.length
    },
    actions: {

        // View
        async getTodoList () {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
            if(response.data.length > 0) {
                this.todos = response.data;
                console.log("Data fetched successfully.", response.data);
                return true;
            }
            console.log("Data failed to fetch.");
            return false;
        },

         // View Details
         async getTodoDetails (todoId) {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
            if(response.data) {
                this.todo = response.data;
                console.log("Data fetched successfully.", response.data);
                return response.data;
            }
            console.log("Data failed to fetch.");
            return false;
        },

        // Add
        async addTodo (payload) {
            const response = await axios.post("https://jsonplaceholder.typicode.com/todos", payload);
            if(response.data.id) {
                this.todos.push(response.data);
                console.log("New data saved successfully.", response.data);
                return true;
            }
            console.log("Data failed to save.", payload);
            return false;
        },
        addTodo_: async (payload) => {
            const response = await axios.post("https://jsonplaceholder.typicode.com/todos", payload);
            
            if(response.data.id) {
                return { 
                    success: true, 
                    message: "New data saved successfully.", 
                    data: response.data
                };
            }
            
            return { 
                success: true, 
                message: "New data failed to save.", 
                data: {}
            };
        },

        // Edit
        async updateTodo (todoId, payload) {
            const response = await axios.patch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, payload);
            const index = this.todos.findIndex(todo => todo.id === todoId)
            if(index !== -1) {
                this.todos.splice(index, 1, response.data)
            }
            // this.todos = this.todos.filter(todo => todo.id !== todoId);


        /*     const index = state.posts.findIndex(post => post.id === payload.id)
            if(index !== -1) {
                state.posts.splice(index, 1, payload)
            } */
            console.log("Data updated successfully.", response.data);
            return true;
        },

        // Change Status
        async updateTodoStatus (todoId) {
            await axios.patch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
            // this.todos = this.todos.filter(todo => todo.id !== todoId);
            console.log("Data updated successfully.");
            return true;
        },

        //Delete
        async removeTodo (todoId) {
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
            this.todos = this.todos.filter(todo => todo.id !== todoId);
            console.log("Data deleted successfully.");
            return true;
        }
    }
})