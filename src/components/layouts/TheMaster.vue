<template>
    <main>
        <h5>Hello, <span class="text-info">Guys!</span> Welcome to Pinia State Manager.</h5>
        <slots></slots>
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
        min-height: 78.5vh;
    }
</style>