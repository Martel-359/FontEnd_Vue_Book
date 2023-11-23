
<template>
    <nav class="navbar navbar-expand-lg h-100 navbar-light bg-light">
        <div class="navbar-nav h-100 align-top d-block">
            <router-link to="/" class="text-decoration-none">
                <button class="nav-link" href="#">Home</button>
            </router-link>    
            <button @click="handleUser" class="nav-item nav-link" :class="{ acctive: index === 0 }">Khách Hàng</button>
            <button @click="handleEmployee" class="nav-item nav-link" :class="{ acctive: index === 1 }">Nhân Viên</button>
            <button @click="handleProduct" class="nav-item nav-link" :class="{ acctive: index === 2 }">Sản Phẩm</button>
            <button @click="handleOrder" class="nav-item nav-link" :class="{ acctive: index === 3 }">Đơn Hàng</button>
            <button @click="handleUpload" class="nav-item nav-link" :class="{ acctive: index === 4 }">Thêm Ảnh</button>

        </div>
    </nav>
</template>

<script>
export default {
    props: {
        index: {
            type: Number,
        }
    },
    methods: {
        handleUser() {
            this.$emit('NavAdmin', 0);
        },
        handleEmployee() {
            this.$emit('NavAdmin', 1);
        },
        handleProduct() {
            this.$emit('NavAdmin', 2);
        },
        handleOrder() {
            this.$emit('NavAdmin', 3);
        },
        handleUpload() {
            this.$emit('NavAdmin', 4);
        },  
    }
};
</script>

<style scoped>
.acctive {
    font-weight: bold;
}
</style>
