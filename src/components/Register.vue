<template>
    <!-- Section: Design Block -->
<section class="">
  <!-- Jumbotron -->
  <div class="px-4 py-5 px-md-5 text-center text-lg-start" style="background-color: hsl(0, 0%, 96%)">
    <div class="container">
      <div class="row gx-lg-5 align-items-center">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <h1 class="my-5 display-3 fw-bold ls-tight">
            The best offer <br />
            <span class="text-primary">for your business</span>
          </h1>
        </div>

        <div class="col-lg-6 mb-5 mb-lg-0">
          <div class="card">
            <div class="card-body py-5 px-md-5">
              <form @submit.prevent="submitRegister" method="post">
                <!-- 2 column grid layout with text inputs for the first and last names -->
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text" v-model="userLocal.HoTenKH" id="form3Example1" class="form-control" />
                      <label class="form-label"  for="form3Example1">Họ và Tên</label>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input type="text"  v-model="userLocal.DiaChi" id="form3Example2" class="form-control" />
                      <label class="form-label"  for="form3Example2">Đia Chỉ</label>
                    </div>
                  </div>
                </div>

                <!-- Email input -->
                <div class="form-outline mb-4">
                  <input type="text" v-model="userLocal.SoDienThoai" id="form3Example3" class="form-control" />
                  <label class="form-label"  for="form3Example3">Số Điện Thoại</label>
                </div>

                <!-- Password input -->
                <div class="form-outline mb-4">
                  <input type="password" v-model="userLocal.Password" id="form3Example4" class="form-control" />
                  <label class="form-label"  for="form3Example4">Mật Khẩu</label>
                </div>

                <!-- Checkbox -->
                <div class="form-check d-flex justify-content-center mb-4">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                  <label class="form-check-label" for="form2Example33">
                    Subscribe to our newsletter
                  </label>
                </div>

                <!-- Submit button -->
                <button type="submit" class="btn btn-primary btn-block mb-4">
                  Sign up
                </button>

                <!-- Register buttons -->
                <div class="text-center">
                  <p>or sign up with:</p>
                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-facebook-f"></i>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-google"></i>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-twitter"></i>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-github"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Jumbotron -->
</section>
<!-- Section: Design Block -->
</template>

<script>
 import UserService from "@/services/user.service.js";
export default{
  emits: ["isRegister"],
  data() {
    return {
      userLocal: {
        HoTenKH: "",
        SoDienThoai: "",
        DiaChi: "",
        Password: "",
      },
    };
  },
  methods:{
    async submitRegister(){
      await UserService.create(this.userLocal);
      this.$emit("isRegister");
    }
  },
}
</script>