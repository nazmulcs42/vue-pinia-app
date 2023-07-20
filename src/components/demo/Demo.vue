<template>
    <div class="mt-5 w-50 mx-auto p-5 shadow-lg rounded border border-2 border-danger-subtle" >
        <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube-nocookie.com/embed/Flc8PFTNEUY" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen
        ></iframe>
    </div>

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
    beforeCreate(){
        console.log("Before Created")
    },
    created(){
        console.log("Created")
    },
    beforeMount(){
        console.log("Before Mounted")
    },
    mounted(){
        console.log("Mounted")
    },
    beforeUpdate(){
        console.log("Before Update")
    },
    updated(){
        console.log("Updated")
    },
    beforeUnmount(){
        console.log("Before Unmounted")
    },
    unmounted(){
        console.log("Unmounted")
    },
    setup () {
        const counter =  ref(0)

        return {
            counter
        }
    },
    methods: {
        counterIncrement(){
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