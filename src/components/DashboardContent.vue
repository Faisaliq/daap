<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import DeleteModal from './modals/DeleteModal.vue'
import IdentityModal from '../components/modals/IdentityModal.vue'

const deleteModal = ref(null)
const myModal = ref()

const openDelete = (itemName) => {
  deleteModal.value.show(itemName)
}

const handleDelete = () => {
  // Perform actual deletion logic here
  console.log('Confirmed delete')
}

function showModal() {
  myModal.value.openModal()
}

const currentTime = ref('')
let timer = null

function updateTime() {
  const now = new Date()
  const yyyy = now.getFullYear()
  const mm = String(now.getMonth() + 1).padStart(2, '0')
  const dd = String(now.getDate()).padStart(2, '0')
  const hh = String(now.getHours()).padStart(2, '0')
  const min = String(now.getMinutes()).padStart(2, '0')
  const ss = String(now.getSeconds()).padStart(2, '0')
  currentTime.value = `${yyyy}-${mm}-${dd} ${hh}:${min}:${ss}`
}

onMounted(() => {
  updateTime()
  timer = setInterval(updateTime, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <div>
    <!-- Page Title -->
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h1 class="h4 mb-0">Administrative Portal</h1>
      <div class="text-muted small">
        <span class="me-2 text-danger">● Real-time</span>
        <span>{{ currentTime }}</span>
      </div>
    </div>

    <!-- Filters -->
    <div class="bg-light border-top border-bottom py-2 px-3" style="background-color: #105a8e !important;">
      <strong class="text-white">Filters</strong>
    </div>

    <div class="d-flex flex-wrap gap-3 p-3 bg-white rounded shadow-sm mb-4">
      <div class="flex-grow-1">
        <label class="form-label">Search</label>
        <input type="text" class="form-control" placeholder="Search for anything" />
      </div>
      <div>
        <label class="form-label">Sort By</label>
        <select class="form-select">
          <option>Sort By</option>
        </select>
      </div>
      <div>
        <label class="form-label">Show</label>
        <select class="form-select">
          <option>Show All</option>
        </select>
      </div>
      <div>
        <label class="form-label">Status</label>
        <select class="form-select">
          <option>Status</option>
        </select>
      </div>
    </div>

    <!-- Table -->
    <div class="table-responsive bg-white rounded shadow-sm">
      <table class="table table-bordered table-hover align-middle mb-0">
        <thead class="table-primary text-uppercase small">
          <tr>
            <th class="text-white">First Name</th>
            <th class="text-white">Last Name</th>
            <th class="text-white">Email</th>
            <th class="text-white">Barcode</th>
            <th class="text-white">ID Front</th>
            <th class="text-white">ID Back</th>
            <th class="text-white">Selfie</th>
            <th class="text-white">Real ID</th>
            <th class="text-white">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="n in 4" :key="n">
            <td>Kenny</td>
            <td>Dewitt</td>
            <td>kdewitt@email.com</td>
            <td><img src="https://via.placeholder.com/32" @click="showModal" class="img-thumbnail" /></td>
            <td><img src="https://via.placeholder.com/32" @click="showModal" class="img-thumbnail" /></td>
            <td><img src="https://via.placeholder.com/32" @click="showModal" class="img-thumbnail" /></td>
            <td><img src="https://via.placeholder.com/32" @click="showModal" class="rounded-circle img-thumbnail" /></td>
            <td><img src="https://via.placeholder.com/32" @click="showModal" class="rounded-circle img-thumbnail" /></td>
            <td>
              <div class="d-flex">
                <button class="btn btn-success me-2 btn-sm">VIEW</button>
                <button class="btn btn-primary me-2 btn-sm">EDIT</button>
                <button
                  class="btn btn-outline-danger btn-sm"
                  @click="openDelete('User ' + n)"
                >
                  DELETE
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div class="position-relative mt-4 bg-white p-3 rounded shadow-sm">
      <!-- Left: Info -->
      <p class="mb-0 text-muted">1 of 10 pages (220 items)</p>

      <!-- Center: Select -->
      <div class="position-absolute top-50 start-50 translate-middle">
        <select class="form-select form-select-sm text-center w-auto">
          <option>10</option>
          <option>25</option>
          <option>50</option>
        </select>
      </div>

      <!-- Right: Buttons -->
      <div class="position-absolute top-50 end-0 translate-middle-y d-flex gap-2 me-3">
        <button class="btn btn-outline-secondary btn-sm">
          <i class="fas fa-chevron-left me-1"></i> Previous
        </button>
        <button class="btn btn-outline-secondary btn-sm">
          Next <i class="fas fa-chevron-right ms-1"></i>
        </button>
      </div>
    </div>



    <!-- Delete Modal -->
    <DeleteModal ref="deleteModal" @confirm="handleDelete" />
    <IdentityModal ref="myModal" modalId="myModal" title="Id Front (Firstname Lastname)" />

  </div>
</template>

<style scoped>
.table-primary {
  background-color: #105a8e !important;
}
</style>
