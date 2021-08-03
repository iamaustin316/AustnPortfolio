<template>
    <div class="container">
        <h1>關於我</h1>
        <Nav></Nav>
    </div>
</template>

<script>
import { onMounted } from 'vue'
import Nav from '../components/Nav.vue'
export default {
    components: {
        Nav
    },
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