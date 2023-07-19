<template>
    <div class="col-md-12">
        <h3 class="text-center">{{ name }}</h3>
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-6">
                    <textarea name="left" id="left" cols="60" rows="15" class="p-3" spellcheck="false" v-model="text"></textarea>
                </div>
                <div class="col-md-6">
                    <div class="w-full h-100 px-3 py-4 shadow-lg rounded border border-3 border-danger-subtle" v-html="markedText"></div>
                    <!-- <textarea name="left" id="left" cols="60" rows="15" class="p-3" spellcheck="false" v-html="markedText"></textarea> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script >
import { ref } from 'vue'
// import marked from 'marked'

export default {
    setup () {
        const name = "Markdown"
        const defaultText = `
        <div class="markdown container ">
            <h1 class="markdown-title text-info mb-3">Hi Nazmul </h1>
            <div class="markdown-content">
                <p> Welcome to Markdown IDE. Hope you will enjoy it very much with the new experiences.</p>
                <p>Write your markup code........</p>
                <p><strong>Happy Coding......</strong></p>
            </div>
        </div>
        `
        const text = ref(defaultText)
        return {
            name,
            text
        }
    },
    computed: {
        markedText(){
            return this.text
            // return marked(this.text)
        }
    }
}
</script>

<style scoped>

</style>