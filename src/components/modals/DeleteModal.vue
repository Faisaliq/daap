<script setup>
    import { ref } from 'vue'

    const modal = ref(null)
    const itemName = ref('this item')

    const show = (name = 'this item') => {
    itemName.value = name
    const bsModal = new bootstrap.Modal(modal.value)
    bsModal.show()
    }

    const hideModal = () => {
    bootstrap.Modal.getInstance(modal.value)?.hide()
    }

    const emit = defineEmits(['confirm'])

    const confirmDelete = () => {
    emit('confirm')
    hideModal()
    }

    defineExpose({ show })
</script>

<template>
  <div class="modal fade" tabindex="-1" ref="modal" id="deleteModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0 shadow">
        <div class="modal-header">
          <h5 class="modal-title">Delete (Firstname Lastname)</h5>
          <button type="button" class="btn-close btn-close-white" @click="hideModal"></button>
        </div>
        <div class="modal-body">
          <p>Are you sure you want to delete <strong>{{ itemName }}</strong>?</p>
          <p><strong>This action cannot be undone</strong></p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-primary" @click="hideModal">CANCEL</button>
          <button type="button" class="btn btn-danger" @click="confirmDelete">DELETE</button>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.modal-content {
  border-radius: 0.75rem;
}
</style>
