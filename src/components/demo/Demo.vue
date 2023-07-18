<template>
    <div class="mt-5 w-50 mx-auto p-5 shadow-lg rounded border border-2 border-danger-subtle" >
        <h3 class="text-center">Counter <span class="text-info">{{ counter }}</span></h3>
        <div class="d-block text-center mt-5">
            <button class="btn btn-md btn-primary mx-2" @click="counterIncrement">Increase</button>
            <button class="btn btn-md btn-warning mx-2" @click="counterDecrement">Decrease</button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'; 

export default {
    setup () {
        const counter =  ref(0)

        return {
            counter
        }
    },
    methods: {
        counterIncrement(){
            console.log(this.counter)
            this.counter = this.counter + 1;
        },
        counterDecrement(){
            this.counter = this.counter - 1;
        },
    }
}
</script>

<style  scoped>

</style>