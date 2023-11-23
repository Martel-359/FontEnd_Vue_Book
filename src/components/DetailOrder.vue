

<template>
  <section class="w-100 p-5 full-screen-bg" style="background-color: #fdccbc; border-radius: .5rem .5rem 0 0;">
    <div class="row">
      <div class="col">
        <p>
          <span class="h2">Đơn Hàng Số: {{ detailOrders[0]?.SoDonHang || '' }}</span>

        </p>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">Mã Hàng Hóa</th>
              <th scope="col">Tên Hàng Hóa</th>
              <th scope="col">Số Lượng</th>
              <th scope="col">Giá</th>
              <th scope="col">Giảm Giá</th>
              <th scope="col">Tổng</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="detailOrder in detailOrders" :key="detailOrder.MSHH">
              <td>{{ detailOrder.MSHH }}</td>
              <td>{{ detailOrder.TenHH }}</td>
              <td>{{ detailOrder.SoLuong }}</td>
              <td>{{ detailOrder.GiaDatHang }}</td>
              <td>{{ detailOrder.GiamGia }}</td>
              <td>{{ detailOrder.GiaDatHang - detailOrder.GiamGia }}</td>
            </tr>
          </tbody>
        </table>

        <div class="card mb-5">
          <div class="card-body p-4">
            <div class="float-end">
              <p class="mb-0 me-5 d-flex align-items-center">
                <span class="small text-muted me-2">Order total:</span>
                <span class="lead fw-normal">
                  {{ detailOrders.reduce((total, order) => total + (order.GiaDatHang - order.GiamGia), 0) }}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-end">
          <button @click="backpage" type="button" class="btn btn-warning btn-lg me-2">Trở Về</button>
          <button @click="updateDetailOrder('Đã Hủy')" type="button" class="btn btn-danger btn-lg me-2">Hủy Đơn</button>
          <button @click="updateDetailOrder('Đã Xác Nhận')" type="button"  class="btn btn-primary btn-lg">Nhận Đơn</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import orderService from '../services/order.service';
export default {
  props: {
    detailOrders: {
      type: Array,
      required: false,
    },
  },

  methods: {
    backpage() {
      console.log("backpage");  
      this.$router.go(-1);
    },

    async updateDetailOrder(value) {
      try {
        const res = await orderService.update(this.detailOrders[0].SoDonHang, {
          TrangThaiDH: value,
        });
        console.log(res);
        this.$router.go(-1);
      } catch (error) {
        console.log(error);
      }
    },
  },

};
</script>

<style>
.full-screen-bg {
  background: url('your-background-image.jpg') ;
  background-size: cover;
  height: 100vh; /* Full height of the viewport */


}
</style>