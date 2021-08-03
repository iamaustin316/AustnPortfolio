<template>
    <div class="container">
        <h1>作品</h1>
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
            console.log('Work')
        })
        return {}
    }
}
</script>

<style>

</style>