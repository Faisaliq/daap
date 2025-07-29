<template>
    <div class="container-fluid py-4">
  <!-- Header -->
   <HeaderComponent />
  <div class="d-flex justify-content-between align-items-center mb-3">
    <h1 class="h4 mb-0">Administrative Portal</h1>
    <div class="text-muted small">
      <span class="me-2 text-danger">● Real-time</span>
      <span>08/04/2022 12:05:31</span>
    </div>
  </div>

  <!-- ID Images -->
  <div class="row text-center mb-4">
    <div class="col-md-3 mb-3">
      <div class="card bg-light">
        <div class="card-body">
          <i class="fa-solid fa-id-card fa-4x text-primary mb-2"></i>
          <div>ID Front</div>
        </div>
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <div class="card bg-light">
        <div class="card-body">
          <i class="fa-solid fa-id-card-clip fa-4x text-danger mb-2"></i>
          <div>ID Back</div>
        </div>
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <div class="card bg-light">
        <div class="card-body">
          <i class="fa-solid fa-user fa-4x text-success mb-2"></i>
          <div>Selfie</div>
        </div>
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <div class="card bg-light">
        <div class="card-body">
          <i class="fa-solid fa-user-shield fa-4x text-purple mb-2"></i>
          <div>Real ID</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Details & History -->
  <div class="row">
    <!-- User Details -->
    <div class="col-md-6">
        <div class="card mb-3">
            <div class="card-header fw-bold bg-dark text-white" style="background-color: #105a8e !important;">
            USER DETAILS
            </div>
            <div class="card-body">
            <div class="row mb-2">
                <div class="col-6 fw-bold">First Name:</div>
                <div class="col-6">NICK</div>

                <div class="col-6 fw-bold">Middle Name:</div>
                <div class="col-6">NONE</div>

                <div class="col-6 fw-bold">Last Name:</div>
                <div class="col-6">SAMPLE</div>

                <div class="col-6 fw-bold">Date of Birth:</div>
                <div class="col-6">01/12/1957</div>

                <div class="col-6 fw-bold">Gender:</div>
                <div class="col-6">1</div>

                <div class="col-6 fw-bold">Expiration Date:</div>
                <div class="col-6">01/12/2024</div>

                <div class="col-6 fw-bold">Issue Date:</div>
                <div class="col-6">07/27/2016</div>

                <div class="col-6 fw-bold">State:</div>
                <div class="col-6">FL</div>

                <div class="col-6 fw-bold">City:</div>
                <div class="col-6">TALLAHASSEE</div>

                <div class="col-6 fw-bold">Street Address:</div>
                <div class="col-6">123 MAIN STREET</div>

                <div class="col-6 fw-bold">Postal Code:</div>
                <div class="col-6">00001234</div>

                <div class="col-6 fw-bold">Country:</div>
                <div class="col-6">USA</div>

                <div class="col-6 fw-bold">Document ID:</div>
                <div class="col-6">093161129000</div>

                <div class="col-6 fw-bold">Federal Compliance:</div>
                <div class="col-6">-</div>

                <div class="col-6 fw-bold">Eye Color:</div>
                <div class="col-6">BROWN</div>

                <div class="col-6 fw-bold">Height:</div>
                <div class="col-6">070 IN</div>
            </div>
            </div>
        </div>
    </div>



    <!-- History -->
    <div class="col-md-6">
      <div class="card mb-3">
        <div class="card-header fw-bold bg-dark text-white" style="background-color: #105a8e !important;">
          USERNAME HISTORY
        </div>
        <div class="card-body p-0">
          <table class="table table-sm table-bordered mb-0">
            <thead class="table-light">
              <tr>
                <th>Date</th>
                <th>Result</th>
                <th>Details</th>
                <th>Similarity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2025-07-02 12:44</td>
                <td>Success</td>
                <td>Driving License vs Selfie</td>
                <td>99.3976%</td>
              </tr>
              <tr>
                <td>2025-07-02 13:05</td>
                <td>Success</td>
                <td>Driving License vs Selfie</td>
                <td>99.4578%</td>
              </tr>
              <tr>
                <td>2025-07-02 14:51</td>
                <td>Success</td>
                <td>Driving License vs Selfie</td>
                <td>99.0658%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- System Details -->
      <div class="card">
        <div class="card-header fw-bold bg-dark text-white" style="background-color: #105a8e !important;">
          SYSTEM DETAILS
        </div>
        <div class="card-body p-0">
          <table class="table table-sm table-bordered mb-0">
            <thead class="table-light">
              <tr>
                <th>Details</th>
                <th>Yes/No</th>
                <th>Status</th>
                <th>Liveness</th>
                <th>Facial Rec</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Barcode Match</td>
                <td>Yes</td>
                <td>100%</td>
                <td>NA</td>
                <td>NA</td>
              </tr>
              <tr>
                <td>Selfie vs Front</td>
                <td>Yes</td>
                <td>90%</td>
                <td>8</td>
                <td>85</td>
              </tr>
              <tr>
                <td>Selfie vs Real ID</td>
                <td>Yes</td>
                <td>90%</td>
                <td>8</td>
                <td>85</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Buttons -->
      <div class="text-end mt-3">
        <button class="btn btn-primary me-2">Edit</button>
        <button class="btn btn-danger">Delete</button>
      </div>
    </div>
  </div>

    <FooterComponent />
</div>

</template>

<script setup>

import HeaderComponent from '../components/HeaderComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
import { ref, computed } from 'vue'

</script>