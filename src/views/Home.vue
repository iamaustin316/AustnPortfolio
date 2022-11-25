<template>
    <div class="home">
        <div class="container">
            <div class="profile">
                <div class="profile__rows">
                    <h2>姓名Dev</h2>
                    <h4>{{ profileData.name }}</h4>
                    <img :src="profileData.avatar" :alt="profileData.name">
                </div>
                <div class="profile__rows">
                    <h2>工作經歷</h2>
                    <div>
                        <div v-for="(item, index) in profileData.experience" :key="index">
                            <span>{{ item.year }}</span>
                            <span>{{ item.compnay }}</span>
                            <span>{{ item.positon }}</span>
                        </div>
                    </div>
                </div>
                <div class="profile__rows">
                    <h2>學歷</h2>
                    <div>
                        <div v-for="(item, index) in profileData.education" :key="index">
                            <span>{{ item.year }}</span>
                            <span>{{ item.school }}</span>
                            <span>{{ item.department }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="work">
                <div class="rows">
                    <div class="work-type" v-for="(item, index) in workData" :key="index">
                        <h2>{{ item.type }}</h2>
                        <div class="work-wrap" v-for="(work, index) in item.list" :key="index">
                            <div class="work-wrap__header">
                                <div class="work-wrap__rows">
                                    <h3>專案</h3>
                                    <div>{{ work.title }}</div>
                                </div>
                                <div class="work-wrap__rows">
                                    <h3>客戶</h3>
                                    <div>{{ work.client }}</div>
                                </div>
                                <div class="work-wrap__rows">
                                    <h3>簡介</h3>
                                    <div>{{ work.intro }}</div>
                                </div>
                                <div class="work-wrap__rows">
                                    <h3>工具</h3>
                                    <div>
                                        <span v-for="(tool, index) in work.tool" :key="index">
                                            {{ tool }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="work-list">
                                <div class="work-list__item" v-for="(workItem, index) in work.workList" :key="index">
                                    <img :src="workItem.srcSmall" :alt="workItem.information" loading="lazy" width="200" height="200">
                                    <p>{{ workItem.information }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'
export default {
    setup() {
        const profileData = ref([])
        const workData = ref([])

        onMounted(()=>{
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

<style lang="scss" scoped>
    .container {
        padding: 2rem;
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    .profile {
        &__rows {
            &:not(:last-child) {
                margin-bottom: 4rem;
            }
            h2 {
                color: #aaa;
                font-size: 2rem;
                font-weight: 500;
                margin-bottom: 2rem;
            }
            h4 {
                color: #333;
                font-size: 2rem;
                font-weight: 500;
                line-height: 1.6;
            }
        }
    }
    .work-type {
        &:not(:last-child) {
            margin-bottom: 6rem;
        }
        > h2 {
            color: #aaa;
            font-size: 2rem;
            font-weight: 500;
            margin-bottom: 4rem;
        }
        h4 {
            color: #333;
            font-size: 2rem;
            font-weight: 500;
            line-height: 1.6;
        }
        h5 {
            color: #333;
            font-size: 1.2rem;
            font-weight: 500;
            line-height: 1.6;
        }
    }
    .work-list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        @media screen and (max-width:768px) {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    .work-wrap {
        &:not(:last-child) {
            margin-bottom: 4rem;
        }
        &__rows {
            display: flex;
            gap: 1rem;
            align-items: center;
            &:not(:last-child) {
                padding-bottom: 0.4rem;
                margin-bottom: 0.4rem;
                border-bottom: solid 0.1rem #eee;
            }
            > h3 {
                color: #aaa;
                font-size: 1.2rem;
                font-weight: 500;
                line-height: 1.6;
            }
            > div {
                color: #666;
                font-size: 1.2rem;
                font-weight: 500;
                line-height: 1.6;
            }
        }
        &__header {
            margin-bottom: 1rem;
        }
    }
</style>