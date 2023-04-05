<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script setup>
const title = 'Redcomm Test';
useHead({
  title,
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    {
      name: 'description',
      key: 'description',
      content: title,
    },
  ],
});
</script>
<!-- <style>
body{
  background-color: rgb(228, 228, 228);
}
</style> -->