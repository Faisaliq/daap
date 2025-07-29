// stores/darkModeStore.js
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useDarkModeStore = defineStore('darkMode', () => {
  const darkMode = ref(window.matchMedia('(prefers-color-scheme: dark)').matches)

  // Listen for system changes
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.addEventListener('change', (e) => {
    darkMode.value = e.matches
  })

  return { darkMode }
})
