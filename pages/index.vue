<template>
  <div>
    <NsiteHtmlblob v-if="isRouteFound" :url="nsiteroute" />

    <NsiteLoader v-if="!isRouteFound"/>
    
  </div>
</template>

<script setup>
import data from "~/config/settings";
const isRouteFound = ref(false);
const nsiteroute = ref("")

const fetchUrl = async () => {
  for (const server of data.blossomservers) {
    const fullUrl = server + data.filehash;
    try {
      const response = await fetch(fullUrl);
      if (response.status === 200) {
        isRouteFound.value = true;
        nsiteroute.value = fullUrl
        console.log(fullUrl);
        return;
      }
    } catch (error) {
      console.log("Nothing Here");
    }
  }
  // If no valid route is found, set isRouteFound to true to avoid infinite loading
  isRouteFound.value = true;
};

onBeforeMount(async () => {

  fetchUrl()

})

</script>
