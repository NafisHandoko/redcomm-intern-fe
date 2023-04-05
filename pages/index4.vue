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
                <input type="text" id="simple-search"
                    class="shadow-lg bg-white border border-white text-sm rounded-full focus:ring-red-400 focus:border-red-400 block w-full pl-14 p-2.5 placeholder-red-400"
                    placeholder="Search by Username or Comment" />
            </div>
            <div class="flex flex-col gap-5">
                <div v-for="index in 10" :key="index"
                    class="flex flex-row items-start gap-4 rounded-2xl bg-white shadow-2xl p-5">
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
            <pagination :total-pages="totalPages" :total="total" :per-page="perPage" :current-page="currentPage"
                :has-more-pages="hasMorePages" @pagechanged="showMore">
            </pagination>
            <button class="bg-red-400 rounded-full text-white px-5 py-3">Load More</button>
            <div :v-for="comment in comments.data">
                <p>{{ comment.username }}</p>
            </div>
        </div>
    </section>
</template>

<script>
import Pagination from '~/components/Pagination.vue';
export default {
    components: {
        Pagination
    },
    data() {
        return {
            page: 1,
            totalPages: 4,
            total: 40,
            perPage: 10,
            currentPage: 1,
            hasMorePages: true
        }
    },
    methods: {
        showMore(page) {
            this.page = page;
            this.currentPage = page;
        }
    },
    async setup() {
        const { data: comments } = await useFetch('http://127.0.0.1:8000/api/comment?page=1')
        console.log(comments)
    }
}
</script>

<!-- <script setup>
// import { Pagination } from '~/.nuxt/components';

const data = ref({
    page: 1,
    totalPages: 4,
    total: 40,
    perPage: 10,
    currentPage: 1,
    hasMorePages: true
})

const { data: comments } = await useFetch('http://127.0.0.1:8000/api/comment')

// methods
function onClickFirstPage() {
    this.$emit("pagechanged", 1);
}
function onClickPreviousPage() {
    this.$emit("pagechanged", this.currentPage - 1);
}
function onClickPage(page) {
    this.$emit("pagechanged", page);
}
function onClickNextPage() {
    this.$emit("pagechanged", this.currentPage + 1);
}
function onClickLastPage() {
    this.$emit("pagechanged", this.totalPages);
}
function isPageActive(page) {
    return this.currentPage === page;
}

function showMore(page) {
    this.page = page;
    this.currentPage = page;
}

// computed
const startPage = computed(() => {
    if (this.currentPage === 1) {
        return 1;
    }

    if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons + 1;
    }

    return this.currentPage - 1;
})
const endPage = computed(() => {
    return Math.min(
        this.startPage + this.maxVisibleButtons - 1,
        this.totalPages
    );
})
const pages = computed(() => {
    const range = [];

    for (let i = this.startPage; i <= this.endPage; i += 1) {
        range.push({
            name: i,
            isDisabled: i === this.currentPage
        });
    }
})
</script> -->