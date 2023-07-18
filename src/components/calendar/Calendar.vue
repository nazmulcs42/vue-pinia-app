<template>
    <div class="mt-3">
        <h3 class="text-center my-3">Calendar</h3>
        <section class="calendar-header d-flex justify-content-between align-items-center mx-lg-3">
            <h5 class="text-white text-end">{{ currentMonthName }}</h5>
            <h5 class="text-white text-end">{{ currentYear }}</h5>
        </section>
        <section class="calendar-body">
            <div class="white-space d-flex">
                <p 
                    class="text-center p-3" 
                    style="width:14.28%; background-color:brown;" 
                    v-for="day in days" :key="day"
                > {{ day }} </p>
            </div>

            <div class="calendar-date d-flex flex-wrap">
                <p 
                    class="text-center rounded-3 p-3" 
                    style="width:14.28%;" 
                    v-for="num in startDay()" :key="num" 
                > </p>
                <p 
                    class="text-center text-white bg-gradient rounded-3 p-3" 
                    style="width:14.28%;" 
                    v-for="num in daysInMonth()" :key="num" 
                    :style="highlightCurrentDate(num) ? 'background-color:#232c16; border: 1px solid #C1C1C1' : ''"
                > {{ num }} </p>
            </div>
        </section>
        <section class="calendar-footer d-flex justify-content-between align-items-center mt-3">
            <button type="button" class="text-white rounded-3 p-3" style="min-width:14.28%;background-color:brown;" @click="prevMonth"> Previous</button>
            <button type="button" class="text-white rounded-3 p-3" style="min-width:14.28%;background-color:brown;" @click="nextMonth">Next </button>
        </section>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup () {
        const currentYear = ref(new Date().getFullYear())
        const currentMonth = ref(new Date().getMonth())
        const currentDate = ref(new Date().getDate())
        const days = ref(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"])
        return {
            currentYear,
            currentMonth,
            currentDate,
            days
        }
    },
    computed: {
        currentMonthName () {
            return new Date(this.currentYear, this.currentMonth).toLocaleString("default", {month: "long"})
        }
    },

    methods: {
        daysInMonth () {
            return new Date(this.currentYear, this.currentMonth+1, 0).getDate()
        },
        startDay () {
            return new Date(this.currentYear, this.currentMonth, 1).getDay()
        },
        nextMonth () {
            if(this.currentMonth === 11){
                this.currentYear++
                this.currentMonth = 0
                // this.currentDate = 1
            } else {
                this.currentMonth++
            }
        },
        prevMonth () {
            if(this.currentMonth === 0){
                this.currentYear--
                this.currentMonth = 11
                // this.currentDate = 31
            } else {
                this.currentMonth--
            }
        },
        highlightCurrentDate (num) {
            const selectedDate = new Date(this.currentYear, this.currentMonth, num).toDateString()
            const currentDate = new Date().toDateString()
            
            return selectedDate === currentDate;
        }
    }
}
</script>

<style scoped>

</style>