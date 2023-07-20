<template>
<div class="container">
    <h3 class="text-center">{{ name }}</h3>
    <div class="custom-carousel-items  position-relative">
        <div
            v-for="(color, index) in sliders"
            :key="index">
            <Transition name="slide-fade">
            <div
                v-if="currentSlide == index" 
                class="custom-carousel-item position-absolute" 
                :class="color"
            >carousel-{{ currentSlide }}</div>
            </Transition>
        </div>

        
        <!-- <div
            v-if="currentSlide == 1" 
            class="custom-carousel-item position-absolute bg-danger" 
            id="carouselOne"
        >carouselOne</div>
        
        <div 
            v-if="currentSlide == 0" 
            class="custom-carousel-item position-absolute bg-success" 
            id="carouselTwo"
        >carouselTwo</div>

        <div 
            v-if="currentSlide == 2" 
            class="custom-carousel-item position-absolute bg-info" 
            id="carouselThree"
        >carouselThree</div>

        <div 
            v-if="currentSlide == 3" 
            class="custom-carousel-item position-absolute bg-warning" 
            id="carouselFour"
        >carouselFour</div>

        <div 
            v-if="currentSlide == 4" 
            class="custom-carousel-item position-absolute bg-primary" 
            id="carouselFive"
        >carouselFive</div> -->
    </div>
</div>
</template>

<script>
import { ref } from 'vue'

export default {
    mounted () {
        this.interval = setInterval(() => {{
            console.log("current slider. ", this.currentSlide)
            this.currentSlide = this.currentSlide == 4 ? 0 : this.currentSlide + 1;
            // if(this.currentSlide == 4) {
            //     this.currentSlide = 0
            // }else{
            //     this.currentSlide++
            // }
        }},2000)
    },
    beforeUnmount () {
        console.log("vanished slider.")
        clearInterval(this.interval)
    },
    setup () {
        const name = "Carousel"
        const currentSlide = ref(0)
        const interval = ref("")
        const sliders = ref(["bg-danger", "bg-success", "bg-warning", "bg-info", "bg-primary", "bg-secondary"])
        return {
            name,
            currentSlide,
            interval,
            sliders
        }
    },
    methods: {

    }
}
</script>

<style scoped>
    .custom-carousel-items {
        box-sizing: border-box;
    }
    .custom-carousel-item {
        height: 350px;
        width: 100%;
        padding: 1.2rem;
    }

     /*
        Enter and leave animations can use different
        durations and timing functions.
    */
   
    .slide-fade-enter-active {
        transition: all 0.8s ease-in;
    }

    .slide-fade-leave-active {
        transition: all 0.8s ease-out;
    }

    .slide-fade-enter-from {
        transform: translateX(-0.1%);
        opacity: 0;
    }    .slide-fade-leave-to {
        transform: translateX(0.1%);
        opacity: 0;
    }
</style>