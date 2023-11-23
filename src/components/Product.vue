
<template>
    <div class="">
        <table class="table   bg-white w-100">
            <thead class="bg-light">
                <tr>
                    <th>Mã Số Sản Phẩm</th>
                    <th>Tên Sản Phẩm</th>
                    <th>Mô Tả </th>
                    <th>Giá</th>
                    <th>Số Lượng</th>
                    <th>Ghi Chú</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="Product in Products" :key="Product._id">
                    <td>
                        <p class="fw-normal mb-1">{{ Product.MaSoHH }}</p>
                    </td>
                    <td>
                        <p class="fw-normal mb-1">{{ Product.TenHH }}</p>
                    </td>
                    <td>
                        <span class="fw-normal mb-1">{{ Product.MoTaHH }}</span>
                    </td>
                    <td>{{ Product.Gia }}</td>
                    <td>
                        <p class="fw-normal mb-1">{{ Product.SoLuongHang }}</p>
                    </td>
                    <td>
                        <p class="fw-normal mb-1">{{ Product.GhiChu }}</p>

                    </td>
                    <td>
                        <router-link :to="{ name: 'product', params: { id: Product._id } }">
                            <button type="submit" class="btn btn-warning btn-sm btn-rounded">
                                <i class="fa-solid fa-user-pen"></i>Sửa
                            </button>
                        </router-link>
                        <form @submit.prevent="submitDelete(Product._id)" method="post">
                            <button type="submit" class="btn btn-danger m-2 btn-sm btn-rounded">
                                <i class="fa-solid fa-trash"></i>Xóa
                            </button>
                        </form>
                    </td>
                </tr>
            </tbody>
            <!-- <button @click="addProduct" href="#" class="btn btn-primary float-button rounded-circle"><i class="fa-solid fa-plus" style="color: #ffffff;"></i></button> -->
            <!-- Trong template của component B (gọi component A) -->
            <router-link :to="{ name: 'product', params: { id: '' } }">
                <i class="icon fa-solid fa-plus float-button rounded-circle"></i>
            </router-link>

        </table>
    </div>
</template>
  
<script>
import ProductService from '../services/product.service';
export default {
    props: {
        Products: {
            type: Array,
            required: true
        }
    },
    methods: {
        async submitDelete(id) {
            if(confirm("Bạn có muốn xóa sản phẩm này không!") == true) {
                await ProductService.delete(id);
                this.$emit("submitDelete");
            } else {
                text = "You canceled!";
            }
    },
}
};
</script>
  
<style>
.float-button {

    bottom: 20px;
    right: 20px;
}

.icon {
    position: fixed;
    background-color: rgb(214, 214, 255);
    /* Màu nền của biểu tượng */
    border-radius: 50%;
    /* Làm cho biểu tượng trở thành hình tròn */
    padding: 10px;
    /* Khoảng cách bên trong biểu tượng và nền */
}
</style>
  