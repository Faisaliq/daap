<script setup>
</script>

<template>
  <div class="d-flex justify-content-between align-items-center bg-dark text-white p-3 rounded mb-3">
    <div class="d-flex align-items-center gap-2">
      <img src="" alt="Logo" class="me-2" style="height: 30px;" />
      <strong>DocAuth Admin Portal (DAAP)</strong>
    </div>
    <div>
      <router-link to="/user-profile" class="btn btn-primary me-2 rounded-pill">
        DEMO MODE
      </router-link>
      <button class="btn btn-success rounded-pill"><i class="fa-solid fa-right-from-bracket me-1"></i> LOGOUT</button>
    </div>
  </div>
</template>

