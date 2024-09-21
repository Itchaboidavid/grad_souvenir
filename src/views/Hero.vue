<script setup>
import hero_bg from '../assets/images/hero_bg.jpg';
</script>

<template>
    <div class="hero min-h-screen" :style="{ backgroundImage: `url(${hero_bg})` }">
        <div class="hero-overlay bg-opacity-0"></div>
        <div class="hero-content text-neutral-content text-center">
            <div class="max-w-md">
                <h1 class="mb-5 text-5xl font-bold text-pink-700" style="text-shadow: 1px 1px 1px white;">Hello there!
                    Thank you for coming :>
                </h1>
                <p class="mb-5 text-white text-lg">
                    I appreciate all the time and effort you took to come to my celebration. Thank you so much!
                </p>
            </div>
        </div>
    </div>
</template>
