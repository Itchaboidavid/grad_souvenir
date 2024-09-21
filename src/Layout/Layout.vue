<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false);
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
    <header class="w-full bg-pink-400 shadow-lg">
        <nav class="max-w-screen-lg mx-auto text-white py-2">
            <div class="flex justify-between items-center px-6 md:px-0">
                <div id="logo">
                    <!-- Use RouterLink with the correct 'to' attribute -->
                    <RouterLink :to="{ name: 'home' }"
                        class="btn btn-ghost hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 hover:bg-clip-text hover:text-transparent active:bg-gradient-to-r active:from-pink-500 active:to-pink-600 active:bg-clip-text active:text-transparent text-2xl">
                        YasyMae</RouterLink>
                </div>

                <!-- Hamburger icon for small screens -->
                <button @click="toggleMenu" class="block md:hidden">
                    <!-- Icon for hamburger (you can use any icon here, this is a basic one) -->
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>

                <!-- Menu items (visible on medium and up screens) -->
                <div class="hidden md:flex space-x-4">
                    <RouterLink :to="{ name: 'home' }"
                        class="btn btn-ghost hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 hover:bg-clip-text hover:text-transparent active:bg-gradient-to-r active:from-pink-500 active:to-pink-600 active:bg-clip-text active:text-transparent">
                        HOME</RouterLink>
                    <RouterLink :to="{ name: 'about' }"
                        class="btn btn-ghost hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 hover:bg-clip-text hover:text-transparent active:bg-gradient-to-r active:from-pink-500 active:to-pink-600 active:bg-clip-text active:text-transparent">
                        ABOUT ME</RouterLink>
                    <RouterLink :to="{ name: 'gradpic' }"
                        class="btn btn-ghost hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 hover:bg-clip-text hover:text-transparent active:bg-gradient-to-r active:from-pink-500 active:to-pink-600 active:bg-clip-text active:text-transparent">
                        GRAD PICS</RouterLink>
                </div>
            </div>

            <!-- Mobile menu (visible when isMenuOpen is true) -->
            <div v-if="isMenuOpen" class="mt-4 md:hidden flex flex-col space-y-2">
                <RouterLink :to="{ name: 'home' }" @click="isMenuOpen = false"
                    class="btn btn-ghost hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 hover:bg-clip-text hover:text-transparent active:bg-gradient-to-r active:from-pink-500 active:to-pink-600 active:bg-clip-text active:text-transparent">
                    HOME</RouterLink>
                <RouterLink :to="{ name: 'about' }" @click="isMenuOpen = false"
                    class="btn btn-ghost hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 hover:bg-clip-text hover:text-transparent active:bg-gradient-to-r active:from-pink-500 active:to-pink-600 active:bg-clip-text active:text-transparent">
                    ABOUT ME</RouterLink>
                <RouterLink :to="{ name: 'gradpic' }" @click="isMenuOpen = false"
                    class="btn btn-ghost hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 hover:bg-clip-text hover:text-transparent active:bg-gradient-to-r active:from-pink-500 active:to-pink-600 active:bg-clip-text active:text-transparent">
                    GRAD PICS</RouterLink>
            </div>
        </nav>
    </header>

    <main class="bg-pink-500 h-screen">
        <router-view />
    </main>
</template>
