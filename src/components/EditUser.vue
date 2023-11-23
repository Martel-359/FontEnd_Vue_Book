<template>
   
    <section class="text-center">
        <!-- Jumbotron -->
        <div class="px-4 py-5 px-md-5 ">
            <div class="container">
                <div class="row gx-lg-5 align-items-center">
                    <div class="col-lg-6 mb-5 mb-lg-0 mx-auto">
                        <div class="card">
                            <div class="card-body py-5 px-md-5">
                                <form @submit.prevent="submitEdit" method="post">
                                    <!-- 2 column grid layout with text inputs for the first and last names -->
                                    <div class="row">
                                        <div class="col-md-6 mb-4">
                                            <div class="form-outline">
                                                <label class="form-label" for="form3Example1">Họ và Tên</label>
                                                <input type="text" v-model="userLocal.HoTenKH" id="form3Example1"
                                                    class="form-control" />

                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-4">
                                            <div class="form-outline">
                                                <label class="form-label" for="form3Example2">Đia Chỉ</label>
                                                <input type="text" v-model="userLocal.DiaChi" id="form3Example2"
                                                    class="form-control" />

                                            </div>
                                        </div>
                                    </div>

                                    <!-- Email input -->
                                    <div class="form-outline mb-4">
                                        <label class="form-label" for="form3Example3">Số Điện Thoại</label>
                                        <input type="text" v-model="userLocal.SoDienThoai" id="form3Example3"
                                            class="form-control" />

                                    </div>

                                    <!-- Password input -->
                                    <div class="form-outline mb-4">
                                        <label class="form-label" for="form3Example4">Mật Khẩu</label>
                                        <input type="password" v-model="userLocal.Password" id="form3Example4"
                                            class="form-control" />

                                    </div>

                                    <!-- Submit button -->
                                    <button type="submit" class="btn btn-primary btn-block mb-4">
                                        SAVE
                                    </button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<!-- <script>
import UserService from "@/services/user.service.js";
export default {
    props:{
        userId:{
            type: String,
            required: true
        },
        user:{
            type: Object,
            required: true
        }
    },
    data(){
        return{
            userLocal: {
                HoTenKH: this.user.HoTenKH,
                SoDienThoai: this.user.SoDienThoai,
                DiaChi: this.user.DiaChi,
                Password: this.user.Password,
            },
        }
    },
    methods:{
        submitEdit(){
            UserService.update(this.userId, this.userLocal).then((res) => {
                this.$router.push({ name: "admin" });
            });
        }
    }
}
</script> -->
<script>
import UserService from "@/services/user.service.js";

export default {
    props: {
        userId: {
            type: String,
            required: true,
        },
        user: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            userLocal: {
                HoTenKH: '',
                SoDienThoai: '',
                DiaChi: '',
                Password: '',
            },
        };
    },
    watch: {
        user: {
            deep: true,
            handler(newVal) {
                // Update userLocal when the user prop changes
                this.userLocal = { ...newVal };
            },
        },
    },
    mounted() {
        // Initialize userLocal when the component is mounted
        this.userLocal = { ...this.user };
    },
    methods: {
        submitEdit() {
            UserService.update(this.userId, this.userLocal).then((res) => {
                this.$router.push({ name: "admin" });
            });
        },
    },
};
</script>
  