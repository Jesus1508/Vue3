<template>
  <!-- Header Navbar -->
  <top-menu />

  <router-view />

  <!-- Footer -->
  <custom-footer />
</template>


<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import CustomFooter from '../components/CustomFooter.vue';
  import TopMenu from '../components/TopMenu.vue';
</script>
