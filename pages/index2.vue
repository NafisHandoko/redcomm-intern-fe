<template>
    <div class="container mx-auto py-4 px-4 sm:px-0">
        <!-- Search bar -->
        <div class="mb-4 flex flex-col sm:flex-row">
            <input class="form-input rounded-l-full w-full sm:w-auto mb-2 sm:mb-0 px-4 py-2" type="text" placeholder="Search by Username or Comment">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-full">Search</button>
        </div>
        <!-- Comment list -->
        <div class="bg-white shadow-md rounded my-6 overflow-x-auto">
            <table class="w-full table-auto">
                <thead>
                    <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th class="py-3 px-6 text-left">Username</th>
                        <th class="py-3 px-6 text-left">Comment</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b border-gray-200 hover:bg-gray-100">
                        <td class="py-3 px-6 text-left whitespace-nowrap">John</td>
                        <td class="py-3 px-6 text-left whitespace-nowrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
                    </tr>
                    <tr class="border-b border-gray-200 hover:bg-gray-100">
                        <td class="py-3 px-6 text-left whitespace-nowrap">Jane</td>
                        <td class="py-3 px-6 text-left whitespace-nowrap">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td>
                    </tr>
                    <tr class="border-b border-gray-200 hover:bg-gray-100">
                        <td class="py-3 px-6 text-left whitespace-nowrap">Bob</td>
                        <td class="py-3 px-6 text-left whitespace-nowrap">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</td>
                    </tr>
                    <!-- More rows -->
                </tbody>
            </table>
            <!-- Pagination -->
            <div class="px-5 py-3 bg-gray-100 border-t border-gray-200 flex justify-center">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onclick="loadMore()">Load More</button>
            </div>
        </div>
    </div>
</template>
<script setup>
const { data: comments } = await useFetch('http://127.0.0.1:8000/api/comment')
console.log(comments.value[0])
</script>