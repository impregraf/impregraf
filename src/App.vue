<script setup>
import { defineComponent } from 'vue';
import navBar from './components/shared/navbar.vue'
import footerView from './components/shared/footer.vue'
</script>

<template class="w-full h-full overflow-hidden absolute">
  <nav-bar></nav-bar>
  <RouterView class="w-full h-full pt-12 pb-36 overflow-x-scroll items-start flex" />
  <footer-view class="hidden sm:block"></footer-view>
</template>

<style>
</style>
