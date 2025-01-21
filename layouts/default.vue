<template>
  <div class="bg-colorBgDark min-h-screen">
    <!-- <Header v-if="!data.hidemenu" /> -->

    <main
      class="min-h-screen bg-colorBgLight dark:bg-colorBgDark pt-18 dark:text-white"
    >    

      <slot />
    </main>
  </div>
</template>
<script setup>

import data from "~/config/settings";

</script>
