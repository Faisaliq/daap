<template>
  <div>
    <!-- Page Title -->
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h1 class="h4 mb-0">Administrative Portal</h1>
      <div class="text-muted small">
        <span class="me-2 text-danger">● Real-time</span>
        <span>08/04/2022 12:05:31</span>
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
            <td><img src="https://via.placeholder.com/32" class="img-thumbnail" /></td>
            <td><img src="https://via.placeholder.com/32" class="img-thumbnail" /></td>
            <td><img src="https://via.placeholder.com/32" class="img-thumbnail" /></td>
            <td><img src="https://via.placeholder.com/32" class="rounded-circle img-thumbnail" /></td>
            <td><img src="https://via.placeholder.com/32" class="rounded-circle img-thumbnail" /></td>
            <td>
              <div class="btn-group btn-group-sm">
                <button class="btn btn-success">VIEW</button>
                <button class="btn btn-primary">EDIT</button>
                <button class="btn btn-danger">DELETE</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div class="d-flex flex-wrap justify-content-between align-items-center mt-4 bg-white p-3 rounded shadow-sm">
      <p class="mb-0 text-muted">1 of 10 pages (220 items)</p>

      <div class="d-flex align-items-center gap-2">
        <button class="btn btn-outline-secondary btn-sm">
          <i class="fas fa-chevron-left me-1"></i> Previous
        </button>

        <select class="form-select form-select-sm w-auto text-center">
          <option>10</option>
          <option>25</option>
          <option>50</option>
        </select>

        <button class="btn btn-outline-secondary btn-sm">
          Next <i class="fas fa-chevron-right ms-1"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.table-primary {
  background-color: #105a8e !important;
}
</style>
