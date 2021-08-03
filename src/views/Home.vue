<template>
    <div class="container">
        <h2>Home</h2>
        <ul>
            <li v-for="(value, index) in profileData" :key="index">
                <h2>{{ index }}</h2>
                <div v-if="typeof value === 'string'">
                    {{value}}
                </div>
                <ol v-else>
                    <li v-for="item in value" :key="item">
                        {{ item }}
                    </li>
                </ol>
            </li>
        </ul>
        <div>{{ workData }}</div>
        <Nav></Nav>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Nav from '../components/Nav.vue'
export default {
    components: {
        Nav
    },
    setup() {
        const profileData = ref([])
        const workData = ref([])

        onMounted(()=>{
            console.log('123')
            axios.get('./data/portfolio.json').then(res=>{
                profileData.value = res.data.profile
                workData.value = res.data.work
            })
        })
        return {
            profileData, workData
        }
    }
}
</script>

<style>

</style>