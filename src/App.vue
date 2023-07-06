<template>
  <div class="app-content container bg-secondary text-white p-3">
      <the-header></the-header>
      <the-master></the-master>
      <the-modal></the-modal>
      <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue"
import TheMaster from "./components/layouts/TheMaster.vue"
import TheModal from "./components/layouts/TheModal.vue"
import TheFooter from "./components/layouts/TheFooter.vue"


export default {
    setup () {
        const name =  "App"

        return {
            name,
        }
    },
    components: { TheHeader, TheMaster, TheModal, TheFooter }
}

</script>

<style scoped>
</style>
