<template>
    <nav class="w-full shadow-md fixed bg-[#FFF6F6] z-10 top-0">
        <div class="container mx-auto py-5">
            <h1 class="font-bold text-3xl text-[#3D3D3D]">Nature Social</h1>
        </div>
    </nav>
    <section class="w-full mt-20">
        <div class="container mx-auto flex flex-col items-center gap-12 p-10 max-w-6xl">
            <!-- <input type="text" placeholder="Search by Username or Comment"
                class="w-96 rounded-full py-2 px-4 border-none bg-white"> -->
            <div class="relative w-96 self-end">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <i class="bi bi-search text-red-400"></i>
                </div>
                <input v-model="search" @keyup="searchHandler" type="text" id="simple-search"
                    class="shadow-lg bg-white border border-white text-sm rounded-full focus:ring-red-400 focus:border-red-400 block w-full pl-14 p-2.5 placeholder-red-400"
                    placeholder="Search by Username or Comment" />
            </div>
            <div class="flex flex-col gap-5">
                <div v-for="comment in comments"
                    class="flex flex-row items-start gap-4 rounded-2xl bg-white shadow-2xl p-5">
                    <img class="rounded-full w-10 aspect-square object-cover"
                        src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                        alt="">
                    <div class="flex flex-col items-start">
                        <span class="font-bold">{{ comment.username }}</span>
                        <span class="text-gray-400 text-sm font-light">2023-04-03 06:40:43</span>
                        <p class="mt-4">“{{ comment.comment }}”</p>
                    </div>
                </div>
            </div>
            <Pagination :total-pages="totalPages" :total="total" :per-page="perPage" :current-page="currentPage"
                :has-more-pages="hasMorePages" @pagechanged="showMore">
            </Pagination>
            <button class="rounded-full text-white px-5 py-3" :class="perPage == 5 ? 'bg-red-400' : 'bg-red-200'"
                @click="loadMore">Load More</button>
        </div>
    </section>
</template>

<script setup>
const currentPage = ref(1)
const perPage = ref(5)
const search = ref('')
const comments = ref(null)
const hasMorePages = ref(true)
const { data: fetchedComments } = await useFetch(`http://127.0.0.1:8000/api/comment?page=${currentPage.value}&results=${perPage.value}`)
comments.value = fetchedComments.value.data
// console.log(comments.value.total)
const total = ref(fetchedComments.value.total)
const totalPages = ref(total.value/perPage.value)
// console.log(`totalPage: ${totalPages.value}`)

// const loadMore = () => {}
const showMore = () => {}

const loadMore = async () => {
    if (perPage.value == 5) {
        perPage.value = 10
        const totalPages = ref(total.value/perPage.value)
        const { data: fethedComments } = await useFetch(`http://127.0.0.1:8000/api/comment?page=${currentPage.value}&results=${perPage.value}`)
        comments.value = fethedComments.value.data
    }
}

// const searchHandler = async () => {
//     // console.log(search.value)
//     const { data: fethedComments } = await useFetch(`http://127.0.0.1:8000/api/comment/search?search=${search.value}`)
//     comments.value = fethedComments.value
// }
</script>