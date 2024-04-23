<script setup>
import { RouterLink } from 'vue-router';
import Footer from '@/components/icons/Footer.vue';
</script>

<template>
    <div class="home_container">

        <h1 class="title">Home</h1>

        <div class="links">
            <RouterLink to="/aufgabe1">Aufgabe 1</RouterLink>
            <RouterLink to="/aufgabe2">Aufgabe 2</RouterLink>
        </div>
    </div>
    <Footer />
</template>

<style scoped>
.home_container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.title {
    position: fixed;
    top: 0;
    margin-top: 5rem;

    font-size: 3rem;
}

.links {
    display: flex;
    flex-direction: row;
    gap: 3rem;
}

.links a {
    color: black;
    font-size: 1.5rem;
}
</style>