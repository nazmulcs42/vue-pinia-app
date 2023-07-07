import { defineStore } from "pinia";


export const useTodosStore  = defineStore("todosStore", {
    state: () => {
        return {
            todos: [
                {
                    id: 1,
                    title: "Morning walking at 6.30 am",
                    completed: true
                },
                {
                    id: 2,
                    title: "Breakfast at 8.30 am",
                    completed: false
                },
                {
                    id: 3,
                    title: "Going to school at 9.30 am",
                    completed: true
                },
                {
                    id: 4,
                    title: "Having lunch at 2.00 pm",
                    completed: false
                },
                {
                    id: 5,
                    title: "Coming back to home",
                    completed: false
                },
            ],
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
    }
})