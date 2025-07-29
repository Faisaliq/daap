<script setup>
  import { useDarkModeStore } from './stores/darkModeStore'
  const { darkMode } = useDarkModeStore()
</script>

<template>
  <div :class="darkMode ? 'dark-mode' : 'light-mode'">
    <router-view />
  </div>
</template>


<style>
.dark-mode {
  background-color: #121212;
  color: #fff;
}

.dark-mode .card {
  background-color: #1e1e1e;
  color: #fff;
}

.dark-mode .table {
  background-color: #1e1e1e;
  color: #fff;
}

.light-mode {
  background-color: #fff;
  color: #000;
}

:root {
  --bs-body-bg: #fff;
  --bs-body-color: #000;
}

.dark-mode {
  --bs-body-bg: #121212;
  --bs-body-color: #fff;
}
</style>