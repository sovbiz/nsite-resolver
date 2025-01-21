<template>
  <div class="mt-24">

    <!-- <img
      class="md:h-36 mx-auto block px-12"
      src="/images/eyes-animates-light.gif"
    /> -->

    <div
      class="relative h-24 w-full overflow-hidden flex items-center justify-center text-center"
    >
      <!-- <transition
        :name="currentTransition"
        @before-enter="beforeEnter"
        @leave="leave"
      >
        <div
          v-if="showText"
          :key="currentIndex"
          class="text-2xl text-white text-center"
        >
          {{ texts[currentIndex] }}
        </div>
      </transition> -->

      <p class="mt-2 text-gray-500 dark:text-gray-300 block">Resolving Nsite</p>
      <p class="mt-2 text-gray-500 dark:text-gray-300 block"><span class="loading-dots h-8"> </span></p>


    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const texts = [
  "Browsing Global Feed 🫣",
  "Brewing Some #CoffeeChain",
  "Stay Humble & Say GM 🫡",
];
const currentIndex = ref(0);
const showText = ref(true);
const currentTransition = ref("fade");

const beforeEnter = (el) => {
  el.style.opacity = 0;
  setTimeout(() => {
    el.style.transition = "opacity 1.5s";
    el.style.opacity = 1;
  }, 50);
};

const leave = (el, done) => {
  el.style.transition = "opacity 1.5s";
  el.style.opacity = 0;
  setTimeout(() => {
    done();
    setTimeout(() => {
      showText.value = true;
    }, 50); // small delay to ensure next text starts fading in
  }, 1500);
};

onMounted(() => {
  setInterval(() => {
    showText.value = false;
    setTimeout(() => {
      currentIndex.value = (currentIndex.value + 1) % texts.length;
    }, 1500); // delay to wait for fade-out to complete
  }, 3000);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}


/* Animation for adding one dot at a time */
@keyframes dot-loading {
  0% {
    content: '';
  }
  33% {
    content: '.';
  }
  66% {
    content: '..';
  }
  100% {
    content: '...';
  }
}

.loading-dots::after {
  animation: dot-loading 2.5s steps(3, end) infinite;
  content: '';
}




</style>
