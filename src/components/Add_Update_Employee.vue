<template>
    <div class="m-5">

        <section class="row pd-5">
            <div class="col-3"></div>

            <form @submit.prevent="addEmployee" name="frm" id="frm" action="" method="post"
                class="col-md-6 col-md-offset-3 was-validated" enctype="multipart/form-data">
                <!-- MaSO -->
                <div class="form-group">
                    <label class="form-label display-7 font-weight-bold " for="ten_hang_hoa">Mã Số Nhân Viên</label>
                    <input type="text" v-model="employeeLocal.MSNV" class="form-control is-invalid" maxlen="255"
                        id="ten_hang_hoa" placeholder="Nhập mã nhân viên..." required>
                    <div class="invalid-feedback">
                    </div>
                </div>

                <!-- Name -->
                <div class="form-group">
                    <label class="form-label display-7 font-weight-bold " for="ten_hang_hoa">Tên Nhân Viên</label>
                    <input type="text" v-model="employeeLocal.HoTenNV" class="form-control is-invalid" maxlen="255"
                        id="ten_hang_hoa" placeholder="Nhập tên nhân viên..." required>
                    <div class="invalid-feedback">
                    </div>
                </div>
                <!-- sdt -->
                <div class="form-group">
                    <label class="form-label display-7 font-weight-bold " for="mo_ta">Số Điện Thoại</label>
                    <input type="text" v-model="employeeLocal.SoDienThoai" name="mo_ta" class="form-control is-invalid"
                        maxlen="255" id="mo_ta" placeholder="Nhập mô tả sản phẩm..." required>
                    <div class="invalid-feedback"> </div>
                </div>
                <!-- pasword -->
                <div class="form-group">
                    <label class="form-label display-7 font-weight-bold " for="mo_ta">Mật Khẩu</label>
                    <input type="password" v-model="employeeLocal.Password" name="mo_ta" class="form-control is-invalid"
                        maxlen="255" id="mo_ta" placeholder="Nhập ghi chú sản phẩm..." required>
                    <div class="invalid-feedback"> </div>
                </div>

                <!-- dia chi -->
                <div class="form-group">
                    <label class="form-label display-7 font-weight-bold " for="gia">Địa Chỉ</label>
                    <input type="text" v-model="employeeLocal.DiaChi" min="0" name="gia" class="form-control is-invalid"
                        maxlen="255" id="phone" placeholder="Nhập giá sản phẩm..." required>
                    <div class="invalid-feedback">
                        <strong></strong>
                    </div>
                </div>
                <!-- chuc vu -->
                <div class="form-group">
                    <label class="form-label display-7 font-weight-bold " for="gia">Chức Vụ</label>
                    <input type="text" v-model="employeeLocal.ChucVu" min="0" name="gia"
                        class="form-control is-invalid" maxlen="255" id="phone" placeholder="Nhập số lượng sản phẩm..."
                        required>
                    <div class="invalid-feedback">
                        <strong></strong>
                    </div>
                </div>

              

                <!-- Submit -->
                <br>
                <button type="submit" name="submit" id="submit" class="btn btn-primary">Lưu sản phẩm</button>
            </form>
        </section>
    </div>
</template>
  

<style>
/* Custom style to center the form on the screen */
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>

<script>

import EmployeeService from "@/services/employee.service.js"
export default {
    props: {
        employee: {
            type: Object,
            required: true
        },
        id: {
            type: String,
            required: true
        },
    },

    data() {

        return {
            employeeLocal:{
                MSNV: "",
                TenNV: "",
                Password: "",
                ChucVu: "",
                DiaChi: "",
                SoDienThoai: "",
            }
        };

    },
    watch: {
        employee: {
            handler(newVal) {
                // Update local data when the prop changes
                this.employeeLocal = { ...newVal };
            },
            immediate: true, // Trigger the handler immediately when the component is created
        },
    },
    methods: {
        addEmployee() {
            if (this.id) {
                EmployeeService.update(this.id, this.employeeLocal).then((res) => {
                    alert("Sửa sản phẩm thành công");
                    this.$router.push({ name: "admin" });
                });
            } else {
                EmployeeService.create(this.employeeLocal).then((res) => {
                    alert("Thêm sản phẩm thành công");
                    this.$router.push({ name: "admin" });
                });
            }
            
        },
    },
}
</script>