<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <NuxtLayout>
      <NuxtLoadingIndicator color="#ffcc00" :height="5" />
    <NuxtPage />
  </NuxtLayout>
  </div>
</template>
<script setup>

import data from "~/config/settings";

useHead({
  title: data.name + ' - ' + data.tagline,
  meta: [
    { name: 'description', content: data.tagline }
  ],
  bodyAttrs: {
    class: "bg-colorBgLight dark:bg-colorBgDark",
  },
});

</script>