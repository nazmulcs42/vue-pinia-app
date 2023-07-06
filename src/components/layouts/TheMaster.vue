<template>
    <main>
        <h5>Hello, <span class="text-info">Guys!</span> Welcome to Pinia State Manager.</h5>
        <router-view></router-view>
    </main>
</template>

<script>
export default {
    setup () {
        const name =  "The Main"

        return {
            name,
        }
    }
}
</script>

<style scoped>
    main {
        min-height: 69.6vh;
    }
</style>