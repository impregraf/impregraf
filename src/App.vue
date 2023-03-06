<script setup>
import { defineComponent } from 'vue';
import navBar from './components/shared/navbar.vue'
import footerView from './components/shared/footer.vue'
</script>

<template class="w-full">
  <nav-bar></nav-bar>
  <RouterView class="w-full" />
  <footer-view></footer-view>
</template>

<style>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
