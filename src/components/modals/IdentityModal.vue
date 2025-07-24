<!-- components/Modal.vue -->
<template>
  <div class="modal fade" :id="modalId" tabindex="-1" ref="modalRef">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ title }}</h5>
          <button type="button" class="btn-close" @click="closeModal"></button>
        </div>
        <div class="modal-body modal-body d-flex justify-content-center align-items-center" style="height: 300px;">
          <i class="fa-solid fa-id-card text-success" style="font-size: 20rem;"></i>
        </div>
        <div class="modal-footer">
          <button class="btn btn-outline-primary" @click="closeModal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { defineProps } from 'vue'

const props = defineProps({
  modalId: { type: String, default: 'defaultModal' },
  title: { type: String, default: 'Modal Title' }
})

const modalRef = ref(null)
let modalInstance = null

onMounted(() => {
  modalInstance = new bootstrap.Modal(modalRef.value)
})

function openModal() {
  modalInstance?.show()
}

function closeModal() {
  modalInstance?.hide()
}

defineExpose({ openModal, closeModal })
</script>
