<template>
    <div class="container">
        <h1>關於我</h1>
    </div>
</template>

<script>
import { onMounted } from 'vue'
export default {
    setup() {
        onMounted(()=>{
            console.log('About')
        })
        return {}
    }
}
</script>

<style>

</style>