<template>
    <div class="nav">
        <router-link to="/">首頁</router-link>
        <router-link to="/about">關於</router-link>
        <router-link to="/work">作品</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .nav {
        background: #333;
        padding: 2rem;
        width: 100%;
        display: flex;
        gap: 2rem;
        a {
            color: #ccc;
            font-size: 1.4rem;
            text-decoration: none;
            &.router-link-exact-active {
                color: #fff;
            }
        }
    }
</style>