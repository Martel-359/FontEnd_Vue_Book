<template>
    <div class="m-5">
        <h1 class="text-center"> Sản Phẩm</h1>
        <section class="row pb-5">
            <div class="col-3"></div>
            
            <form @submit.prevent="addProduct" name="frm" id="frm" action="" method="post"
                class="col-md-6 col-md-offset-3 was-validated" enctype="multipart/form-data">

                <div class="form-group">
                    <label class="form-label display-7 font-weight-bold " for="ten_hang_hoa">Mã Số Sản Phẩm</label>
                    <input type="text" v-model="productLocal.MaSoHH" class="form-control is-invalid" maxlen="255"
                        id="ten_hang_hoa" placeholder="Nhập mã sản phẩm..." required>
                    <div class="invalid-feedback">
                    </div>
                </div>

                <!-- Name -->
                <div class="form-group">
                    <label class="form-label display-7 font-weight-bold " for="ten_hang_hoa">Tên sản phẩm</label>
                    <input type="text" v-model="productLocal.TenHH" class="form-control is-invalid" maxlen="255"
                        id="ten_hang_hoa" placeholder="Nhập tên sản phẩm..." required>
                    <div class="invalid-feedback">
                    </div>
                </div>


                <div class="form-group">
                    <label class="form-label display-7 font-weight-bold " for="mo_ta">Mô tả sản phẩm</label>
                    <input type="text" v-model="productLocal.MoTaHH" name="mo_ta" class="form-control is-invalid"
                        maxlen="255" id="mo_ta" placeholder="Nhập mô tả sản phẩm..." required>
                    <div class="invalid-feedback"> </div>
                </div>

                <div class="form-group">
                    <label class="form-label display-7 font-weight-bold " for="gia">Giá sản phẩm</label>
                    <input type="number" v-model="productLocal.Gia" min="0" name="gia" class="form-control is-invalid"
                        maxlen="255" id="phone" placeholder="Nhập giá sản phẩm..." required>
                    <div class="invalid-feedback">
                        <strong></strong>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label display-7 font-weight-bold " for="gia">Số lượng sản phẩm</label>
                    <input type="number" v-model="productLocal.SoLuongHang" min="0" name="gia"
                        class="form-control is-invalid" maxlen="255" id="phone" placeholder="Nhập số lượng sản phẩm..."
                        required>
                    <div class="invalid-feedback">
                        <strong></strong>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label display-7 font-weight-bold " for="mo_ta">Ghi chú</label>
                    <input type="text" v-model="productLocal.GhiChu" name="mo_ta" class="form-control is-invalid"
                        maxlen="255" id="mo_ta" placeholder="Nhập ghi chú sản phẩm..." required>
                    <div class="invalid-feedback"> </div>
                </div>

                <!-- Submit -->
                <br>
                <button @click="cancel" name="submit" id="submit" class="btn btn-danger " style="margin-right: 15px;">Hủy</button>
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

import ProductService from "@/services/product.service.js"
export default {
    props: {
        product: {
            type: Object,
            required: true
        },
        id: {
            type: String,
            required: true
        },
    },

    data() {
        // var productLocal = this.product;
        // return {
        //     productLocal,
        // };
        return {
            productLocal: {
                MaSoHH: "",
                TenHH: "",
                MoTaHH: "",
                Gia: "",
                SoLuongHang: "",
                GhiChu: "",
            },
        };

    },
    watch: {
        product: {
            handler(newVal) {
                // Update local data when the prop changes
                this.productLocal = { ...newVal };
            },
            immediate: true, // Trigger the handler immediately when the component is created
        },
    },
    methods: {
        addProduct() {
            console.log(this.productLocal);
            console.log(this.id);
            if (this.id) {
                ProductService.update(this.id, this.productLocal).then((res) => {
                    alert("Sửa sản phẩm thành công");
                    
                });
            } else {
                ProductService.create(this.productLocal).then((res) => {
                    alert("Thêm sản phẩm thành công");
                   
                });
            }
            this.$router.push({ name: "admin" });

        },

        cancel () {
            this.$router.go(-1);
        },
    },
}
</script>