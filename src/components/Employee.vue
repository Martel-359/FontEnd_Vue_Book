
<template>
  <div class="container-fluid">
    <table class="table align-middle mb-0 bg-white">
      <thead class="bg-light">
        <tr>
          <th>Mã số nhân viên</th>
          <th>Họ tên nhân viên</th>
          <th>Số điện thoại</th>
          <th>Mật khẩu</th>
          <th>Chức vụ</th>
          <th>Địa chỉ</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>

        <tr v-for="Employee in Employees" :key="Employee._id">
          <td>
            <p class="fw-normal mb-1">{{ Employee.MSNV }}</p>
          </td>
          <td>
            <div class="d-flex align-items-center">

              <div class="ms-3">
                <p class="fw-bold mb-1">{{ Employee.HoTenNV }}</p>
              </div>
            </div>
          </td>
          <td>
            <p class="fw-normal mb-1">{{ Employee.SoDienThoai }}</p>
          </td>
          <td>
            <span class="fw-normal mb-1">{{ Employee.Password }}</span>
          </td>
          <td>
            <span class="fw-normal mb-1">{{ Employee.ChucVu }}</span>
          </td>
          <td>
            <span class="fw-normal mb-1">{{ Employee.DiaChi }}</span>
          </td>
          <td>
            <router-link :to="{ name: 'employee', params: { id: Employee._id } }">
              <button type="submit" class="btn btn-warning btn-sm btn-rounded">
                <i class="fa-solid fa-user-pen"></i>Sửa
              </button>
            </router-link>
            <form @submit.prevent="submitDelete(Employee._id)" method="post">
              <button type="submit" class="btn btn-danger m-2 btn-sm btn-rounded">
                <i class="fa-solid fa-trash"></i>Xóa
              </button>
            </form>
          </td>
        </tr>
      </tbody>
      <router-link :to="{ name: 'employee', params: { id: '' } }">
        <i class="icon fa-solid fa-plus float-button rounded-circle"></i>
      </router-link>

    </table>
  </div>
</template>
  
<script>
import EmployeeService from "../services/employee.service";
export default {
  props: {
    Employees: {
      type: Array,
      required: true
    }
  },
  methods: {
    async submitDelete(id) {
      await EmployeeService.delete(id);
      this.$emit("submitDelete");
    },
  }
};
</script>
  
<style></style>
  