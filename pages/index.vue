<template>
    <nav class="w-full shadow-md fixed bg-[#FFF6F6] z-10 top-0">
        <div class="container mx-auto py-5">
            <h1 class="font-bold text-3xl text-[#3D3D3D] text-center md:text-start">Nature Social</h1>
        </div>
    </nav>
    <section class="w-full mt-20">
        <div class="container mx-auto flex flex-col items-center gap-12 p-10 max-w-6xl">
            <div class="relative w-[90%] md:w-96 md:self-end">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <i class="bi bi-search text-red-400"></i>
                </div>
                <input v-model="search" type="text" id="simple-search"
                    class="shadow-lg bg-white border border-white text-sm rounded-full focus:ring-red-400 focus:border-red-400 block w-full pl-14 p-2.5 placeholder-red-400"
                    placeholder="Search by Username or Comment" />
            </div>
            <div class="flex flex-col gap-7">
                <div v-for="comment in comments"
                    class="flex flex-row items-start gap-5 rounded-2xl bg-white shadow-2xl p-5 relative">
                    <div
                        class="absolute -top-3 -right-3 w-8 h-8 flex items-center justify-center bg-red-300 text-white rounded-full">
                        {{ comment.id }}</div>
                    <img class="rounded-full w-10 aspect-square object-cover"
                        :src="`https://source.unsplash.com/random/?person,${comment.username}`"
                        alt="">
                    <div class="flex flex-col items-start">
                        <span class="font-bold">{{ comment.username }}</span>
                        <span class="text-gray-400 text-sm font-light">2023-04-03 06:40:43</span>
                        <p class="mt-4">“{{ comment.comment }}”</p>
                    </div>
                </div>
            </div>

            <div class="flex flex-row gap-3 flex-wrap justify-center items-center">
                <button v-for="i in 5" class="rounded-full w-10 h-10 flex items-center justify-center"
                    :class="page == i ? 'bg-red-500 text-white' : 'bg-white'" @click="changePage($event, i)">{{ i
                    }}</button>
            </div>
            <button class="rounded-full text-white px-5 py-3" :class="results == 5 ? 'bg-red-400' : 'bg-red-400'"
                @click="load">{{ results == 5 ? "Load More" : "Load Less" }}</button>
            <span v-if="results==10" class="text-red-500 text-sm text-center">Maximum comments per page is 10</span>
        </div>
    </section>
</template>

<script setup>
// state initialization
const page = ref(1)
const results = ref(5)
const search = ref('')
const comments = ref(null)

// get comment data on initial page load
const { data: fetchedComments } = await useFetch(`https://redcomm-intern-be.up.railway.app/api/comment?page=${page.value}&results=${results.value}&search=${search.value}`)
comments.value = fetchedComments.value.data
const totalPages = ref(fetchedComments.value.total/results.value)

// The function that is performed when the "Load More/Load Less" button is pressed
const load = async () => {
    if (results.value == 5) {
        results.value = 10
    } else {
        results.value = 5
    }
}

// function for the navigation button to move between pages
const changePage = (e, selectedPage) => {
    page.value = selectedPage
}

// watch changes on page, results, and search state
watchEffect(async () => {
    const { data: fetchedComments } = await useFetch(`https://redcomm-intern-be.up.railway.app/api/comment?page=${page.value}&results=${results.value}&search=${search.value}`)
    comments.value = fetchedComments.value.data
})
</script>