<template>
  <div class="d-flex flex-column min-vh-100">
    <div class="container-fluid p-3 flex-grow-1">
      <HeaderComponent />
  
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h1 class="h4 mb-0">Administrative Portal</h1>
        <div class="text-muted small">
          <span class="me-2 text-danger">● Real-time</span>
          <span>08/04/2022 12:05:31</span>
        </div>
      </div>
  
      <ul class="nav nav-tabs mb-3" role="tablist">
        <li class="nav-item" v-for="(tab, index) in tabs" :key="index">
          <button
            class="nav-link"
            :class="{ active: activeTab === index }"
            @click="activeTab = index"
          >
            {{ tab }}
          </button>
        </li>
      </ul>
  
      <div class="tab-content border rounded p-3 bg-white shadow-sm">
        <div v-if="activeTab === 0">
          <div class="d-flex gap-2 mb-3">
            <button class="btn btn-primary btn-sm">CAPTURE WITH CAMERA</button>
            <button class="btn btn-success btn-sm" @click="triggerFileSelect">BROWSE</button>
            <input ref="fileInput" type="file" class="d-none" @change="handleFileSelect" />
          </div>

          <small class="text-muted d-block mb-4">
            Test the scanning function on the Front of the identification card.
          </small>

          <!-- Drag & Drop Box -->
          <div
            class="drop-zone text-center"
            @dragover.prevent
            @drop.prevent="handleDrop"
          >
            <i class="fas fa-cloud-upload-alt text-success fs-2 mb-2 d-block"></i>
            <strong class="text-uppercase text-dark">DRAG AND DROP FILE TO UPLOAD</strong>
          </div>

          <!-- Optional File Preview -->
          <div v-if="uploadedFile" class="mt-3 text-muted small">
            Selected: {{ uploadedFile.name }}
          </div>
        </div>

        <div v-if="activeTab === 1">Tab 2 Content</div>
        <div v-if="activeTab === 2">Tab 3 Content</div>
        <div v-if="activeTab === 3">Tab 4 Content</div>
      </div>
  
    </div>
    <FooterComponent />
  </div>
</template>

<script setup>
  import FooterComponent from '@/components/FooterComponent.vue';
  import HeaderComponent from '@/components/HeaderComponent.vue';

  import { ref, computed } from 'vue'

  const activeTab = ref(0)
  const tabs = ['Capture ID Front', 'Capture ID Back', 'Capture Barcode', 'Face Detection']

  const uploadedFile = ref(null)
  const fileInput = ref(null)

  function handleDrop(e) {
    const files = e.dataTransfer.files
    if (files.length > 0) {
      uploadedFile.value = files[0]
    }
  }

  function handleFileSelect(e) {
    const file = e.target.files[0]
    if (file) {
      uploadedFile.value = file
    }
  }

  function triggerFileSelect() {
    fileInput.value.click()
  }
</script>

<style scoped>
.nav-link.active {
  background-color: lightgray;
  color: white;
}

.nav-link {
  color: #000; /* default for light mode */
}

.nav-link.active {
  background-color: #fff;
  color: #0d6efd;
  border-bottom: 2px solid #0d6efd;
  font-weight: 600;
}

/* Dark mode styles */
@media (prefers-color-scheme: dark) {
  .nav-link {
    color: #fff; /* text for dark mode */
  }

  .nav-link.active {
    background-color: #212529; /* darker background */
    color: #0d6efd; /* keep same blue for active */
    border-bottom: 2px solid #0d6efd;
  }

  .drop-zone {
    background-color: #343a40;
    border-color: #adb5bd;
    color: #fff;
  }

  .drop-zone:hover {
    background-color: #495057;
  }
}


.drop-zone {
  border: 2px dashed #6c757d; /* dark gray like screenshot */
  border-radius: 10px;
  padding: 40px 20px;
  background-color: #f8f9fa;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.drop-zone:hover {
  background-color: #e9ecef;
}

</style>
