<template>
    <AddProduct :id="id" :product="this.product"/>
</template>

<script>
import AddProduct from '../components/Add_Update_Product.vue';
import ProductService from "@/services/product.service.js"
export default {
    components: {
        AddProduct
    },
    data() {
        return {
            product: {
                MaSoHH: "",
                TenHH: "",
                MoTaHH: "",
                Gia: "",
                SoLuongHang: "",
                GhiChu: "",
            },
            id:"",
        };
    },
    created() {
        this.id = this.$route.params.id;
        if (this.id) {
            ProductService.getById(this.id).then((res) => {
                this.product = res;
                console.log(this.product);
            });
        }
    },
}
</script>
