<script setup>
</script>

<template>
    <div class=" bg-gradient-to-b from-pink-500 to-pink-400 flex flex-col justify-center items-center h-full">
        <h1 class="text-center text-white text-2xl mb-10 px-3" style="text-shadow: 1px 1px 3px black;">Here are some of
            my grad pics. Hope you like it!</h1>
        <div class="carousel mb-10">
            <div class="carousel-item">
                <img src="../assets/images/3.jpg" class="w-[300px] h-full" />
            </div>
            <div class="carousel-item">
                <img src="../assets/images/4.jpg" class="w-[300px] h-full" />
            </div>
            <div class="carousel-item">
                <img src="../assets/images/2.jpg" class="w-[300px] h-full" />
            </div>
            <div class="carousel-item">
                <img src="../assets/images/6.jpg" class="w-[300px] h-full" />
            </div>
            <div class="carousel-item">
                <img src="../assets/images/5.jpg" class="w-[300px] h-full" />
            </div>
            <div class="carousel-item">
                <img src="../assets/images/1.jpg" class="w-[300px] h-full" />
            </div>
            <div class="carousel-item">
                <img src="../assets/images/7.jpg" class="w-[300px] h-full" />
            </div>
            <div class="carousel-item">
                <img src="../assets/images/8.jpg" class="w-[300px] h-full" />
            </div>
        </div>

        <!-- Open the modal using ID.showModal() method -->
        <div class="text-center">
            <button
                class="btn bg-white text-pink-500 border-none hover:bg-pink-500 hover:text-white active:bg-pink-500 active:text-white"
                onclick="my_modal_2.showModal()">Click me for a surprise!</button>
        </div>

        <Teleport to="#modal">
            <dialog id="my_modal_2" class="modal">
                <div class="modal-box bg-pink-400 text-white">
                    <h3 class="text-xl font-bold text-center mb-5">Surpirseeeeeeeeeeeeee! Namamasko po 🥳✌️</h3>
                    <img src="../assets/images/gcash_qr.jpg" alt="gcash qr" class="shadow-md rounded-lg shadow-white">
                </div>
                <form method="dialog" class="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </Teleport>
    </div>
</template>
