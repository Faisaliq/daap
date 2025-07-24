<template>
  <div class="container-fluid p-3">
    <HeaderComponent />

    <!-- Stats -->
    <div class="row text-center mb-4">
  <!-- Left big box -->
  <div class="col-md-6">
    <div class="card h-100">
      <div class="card-body d-flex flex-column justify-content-center">
        <h1 class="text-success mb-0">258</h1>
        <small class="text-muted">Verified MM/DD/YYYY</small>
      </div>
    </div>
  </div>

  <!-- Right side stacked layout -->
  <div class="col-md-6 d-flex flex-column justify-content-between h-100">
    <div class="row flex-fill">
      <!-- Top two boxes -->
      <div class="col-md-6 mb-3">
        <div class="card shadow-sm border-danger h-100">
          <div class="card-body d-flex flex-column justify-content-center">
            <h1 class="text-danger mb-0">17</h1>
            <small class="text-muted">Flagged</small>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-3">
        <div class="card shadow-sm border-secondary h-100">
          <div class="card-body d-flex flex-column justify-content-center">
            <h1 class="text-secondary mb-0">96.04%</h1>
            <small class="text-muted">Avg Similarity Score</small>
          </div>
        </div>
      </div>
    </div>
    <!-- Bottom box full width -->
    <div>
      <div class="card shadow-sm border-info">
        <div class="card-body d-flex flex-column justify-content-center">
          <h1 class="text-info mb-0">3.2s</h1>
          <small class="text-muted">Avg Processing Time</small>
        </div>
      </div>
    </div>
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
    <div class="table-responsive">
      <table class="table table-bordered align-middle text-center">
        <thead class="table-light">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Barcode</th>
            <th>ID Front</th>
            <th>ID Back</th>
            <th>Selfie</th>
            <th>Real ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in filteredData" :key="index">
            <td>{{ item.firstName }}</td>
            <td>{{ item.lastName }}</td>
            <td>{{ item.email }}</td>
            <td><i class="fa-solid fa-barcode text-warning"></i></td>
            <td><i class="fa-solid fa-id-card text-success" @click="showModal"></i></td>
            <td><i class="fa-solid fa-id-card text-success"></i></td>
            <td><i class="fa-solid fa-user text-info"></i></td>
            <td><i class="fa-solid fa-user text-secondary"></i></td>
            <td>
              <button class="btn btn-sm btn-success me-1">View</button>
              <button class="btn btn-sm btn-primary me-1">Edit</button>
              <button class="btn btn-sm btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div class="d-flex justify-content-between align-items-center mt-2">
      <small>1 of 10 pages (200 items)</small>
      <select class="form-select w-auto" v-model="itemsPerPage">
        <option value="10">10 results per page</option>
        <option value="25">25 results per page</option>
        <option value="50">50 results per page</option>
      </select>
    </div>

    <Modal ref="myModal" modalId="myModal" title="User Info">
      <p>This content is passed via slot.</p>
    </Modal>

    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from '../components/HeaderComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
import Modal from '../components/modals/IdentityModal.vue'
import { ref, computed } from 'vue'

const myModal = ref()

function showModal() {
  myModal.value.openModal()
}

const search = ref('')
const sortBy = ref('')
const status = ref('')
const columns = ref('')
const itemsPerPage = ref(10)

const data = ref([
  {
    firstName: 'Kenny',
    lastName: 'Dewitt',
    email: 'kdewitt@gmail.com',
  },
  // Duplicate items for display
  ...Array(4).fill({
    firstName: 'Kenny',
    lastName: 'Dewitt',
    email: 'kdewitt@gmail.com',
  })
])

const filteredData = computed(() => {
  return data.value.filter(item =>
    item.firstName.toLowerCase().includes(search.value.toLowerCase()) ||
    item.email.toLowerCase().includes(search.value.toLowerCase())
  )
})
</script>

<style scoped>
.table th,
.table td {
  vertical-align: middle;
}
</style>