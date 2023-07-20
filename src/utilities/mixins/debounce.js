export default {
    methods: {
        data(){
            return {
                timeout: ""
            }
        },
        debounce (func, wait=1000) {
            // Clear previous timeout
            clearTimeout(this.timeout)

            // Set new timeout
            this.timeout = setTimeout(func, wait)
        }
    },
}