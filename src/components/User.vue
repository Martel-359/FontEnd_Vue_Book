
<template>
  <div class="container-fluid">
    <table class="table align-middle mb-0 bg-white">
      <thead class="bg-light">
        <tr>
          <th>Tên</th>
          <th>Số Điện Thoại</th>
          <th>Địa Chỉ</th>
          <th>Password</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="User in Users" :key="User._id">
          <td>
            <div class="d-flex align-items-center">
              <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style="width: 45px; height: 45px"
                class="rounded-circle" />
              <div class="ms-3">
                <p class="fw-bold mb-1">{{ User.HoTenKH }}</p>
              </div>
            </div>
          </td>
          <td>
            <p class="fw-normal mb-1">{{ User.SoDienThoai }}</p>
          </td>
          <td>
            <span class="fw-normal mb-1">{{ User.DiaChi }}</span>
          </td>
          <td>{{ User.Password }}</td>
          <td>
            <form @submit.prevent="submitEdit(User._id)" method="post">
              <button type="submit" class="btn btn-warning btn-sm btn-rounded">
                <i class="fa-solid fa-user-pen"></i>Sửa
              </button>
            </form>
            <form @submit.prevent="submitDelete(User._id)" method="post">
              <button type="submit" class="btn btn-danger m-2 btn-sm btn-rounded">
                <i class="fa-solid fa-trash"></i>Xóa
              </button>
            </form>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import UserService from "@/services/user.service.js";
export default {
  props: {
    Users: {
      type: Array,
      required: true
    }
  },
  methods: {
    submitEdit(id) {
      this.$router.push({
        name: "editUser",
        params: { id: id }
      });
    },
    async submitDelete(id) {
      await UserService.delete(id);
      this.$emit("submitDelete");
    }
  }
};
</script>

<style></style>
