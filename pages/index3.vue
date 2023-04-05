<template>
    <section class="w-full">
        <div class="container mx-auto flex flex-col items-center gap-12 p-10 max-w-6xl">
            <input type="text" placeholder="Search by Username or Comment"
                class="w-96 rounded-full py-2 px-4 border-none bg-white">
            <div class="grid grid-cols-2 gap-5">
                <div v-for="index in 10" :key="index" class="flex flex-row items-start gap-4 rounded-2xl bg-white shadow-2xl p-5">
                    <img class="rounded-full w-10 aspect-square object-cover"
                        src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                        alt="">
                    <div class="flex flex-col items-start">
                        <span class="font-bold">Amie Bashirian</span>
                        <span class="text-gray-400 text-sm font-light">2023-04-03 06:40:43</span>
                        <p class="mt-4">“Lorem ipsum dolor sit amet consectetur. Ac aenean sed mauris amet ipsum aliquam.
                            Pellentesque vitae nunc diam purus ipsum libero.”</p>
                    </div>
                </div>
            </div>
            <button class="bg-red-400 rounded-full text-white px-5 py-3">Load More</button>
        </div>
    </section>
</template>

<script setup>
</script>