
<template>
    <div class="container-fluid">
      <table class="table align-middle mb-0 bg-white">
        <thead class="bg-light">
          <tr>
            <th>Số đơn hàng</th>
            <th>Mã số khách hàng</th>
            <th>Mã số nhân viên</th>
            <th>Ngày đặt hàng</th>
            <th>Trạng thái đơn hàng</th>
            <th>Chi tiết</th>
          </tr>
        </thead>
        <tbody>
            
          <tr v-for="Order in Orders" :key="Order._id">
            <td>
              <p class="fw-normal mb-1">{{ Order.SoDonHang }}</p>
            </td>
            <td>
              <div class="d-flex align-items-center">
               
                <div class="ms-3">
                  <p class="fw-bold mb-1">{{ Order.MSKH }}</p>
                </div>
              </div>
            </td>
            <td>
              <p class="fw-normal mb-1">{{ Order.MSNV }}</p>
            </td>
            <td>
              <span class="fw-normal mb-1">{{ Order.NgayDH }}</span>
            </td>
            <td>
              <span class="fw-normal mb-1">{{ Order.TrangThaiDH }}</span>
            </td>
          
            <td>
              <!-- <form @submit.prevent="submitDelete(Order._id)" method="post">
                <button type="submit" class="btn btn-danger m-2 btn-sm btn-rounded">
                  <i class="fa-solid fa-trash"></i>chi tiết
                </button>
              </form>  -->
              <router-link :to="{ name: 'detailOrder', params: { SoDonHang: Order.SoDonHang } }">
                <span class="fw-bold">...</span>
              </router-link>
            </td>
          </tr>
        </tbody>

      </table>
    </div>
  </template>
  
  <script>
 import OrderService from "../services/order.service";
  export default {
    props: {
        Orders: {
            type: Array,
            required: true
        }
    },
    methods: {

    }
  };
  </script>
  
  <style></style>
  