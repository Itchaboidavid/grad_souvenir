<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import hero_bg from '../assets/images/hero_bg.jpg';

// Countdown target date (September 24 of the current year)
const targetDate = new Date(new Date().getFullYear(), 8, 24, 11, 0, 0); // Month 8 is September (0-indexed)

// Reactive variables for countdown
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

// Function to calculate the time difference
const calculateTimeDifference = () => {
    const now = new Date().getTime();
    const difference = targetDate.getTime() - now;

    if (difference > 0) {
        // Convert time difference to hours, minutes, and seconds
        hours.value = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes.value = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        seconds.value = Math.floor((difference % (1000 * 60)) / 1000);
    } else {
        // Countdown has ended
        hours.value = 0;
        minutes.value = 0;
        seconds.value = 0;
    }
};

let countdownInterval = null;

onMounted(() => {
    // Calculate the countdown initially
    calculateTimeDifference();

    // Start the countdown interval to update every second
    countdownInterval = setInterval(() => {
        calculateTimeDifference();
    }, 1000);
});

onUnmounted(() => {
    // Clear the interval when the component is destroyed
    clearInterval(countdownInterval);
});
</script>

<template>
    <div class="hero min-h-screen" :style="{ backgroundImage: `url(${hero_bg})` }">
        <div class="hero-overlay bg-opacity-0"></div>
        <div class="hero-content text-neutral-content text-center">
            <div class="max-w-md">
                <div class="grid place-items-center mb-10">
                    <h1 class="mb-5 text-5xl font-bold text-pink-700" style="text-shadow: 3px 3px 1px white;">
                        Hello there! You are invited to join the celebration!
                    </h1>
                    <div v-if="targetDate > new Date()" class="grid place-items-center">
                        <h2 class="text-xl md:text-2xl text-white mb-5" style="text-shadow: 1px 1px 3px black;">
                            Count down till Graduation day!
                        </h2>
                        <div class="grid auto-cols-max grid-flow-col gap-5 text-center">
                            <div class="bg-pink-400 rounded-box text-white flex flex-col p-2"
                                style="text-shadow: 1px 1px 3px black;">
                                <span class="countdown font-mono text-5xl">
                                    <span :style="`--value:${hours}`"></span>
                                </span>
                                hours
                            </div>
                            <div class="bg-pink-400 rounded-box text-white flex flex-col p-2"
                                style="text-shadow: 1px 1px 3px black;">
                                <span class="countdown font-mono text-5xl">
                                    <span :style="`--value:${minutes}`"></span>
                                </span>
                                min
                            </div>
                            <div class="bg-pink-400 rounded-box text-white flex flex-col p-2"
                                style="text-shadow: 1px 1px 3px black;">
                                <span class="countdown font-mono text-5xl">
                                    <span :style="`--value:${seconds}`"></span>
                                </span>
                                sec
                            </div>
                        </div>
                    </div>

                </div>
                <p class="text-white text-md mb-10" style="text-shadow: 1px 1px 3px black;">
                    Celebration reception is at Cabrera residence, September 24 at 2 o'clock in the afternoon. See you
                    there!
                </p>
                <small class="text-white">
                    We can't wait to celebrate with you. Save the date and come enjoy this special moment with us!
                </small>
            </div>
        </div>
    </div>
</template>
