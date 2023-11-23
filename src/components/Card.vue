<template>
    <div class="container">
        <section class="mx-auto my-5" style="max-width: 23rem;">

            <div class="card booking-card v-2  mt-2 mb-4 rounded-bottom w-100">
                <div class="bg-image hover-overlay ripple w-100 ripple-surface ripple-surface-light d-flex justify-content-center align-items-center"
                    data-mdb-ripple-color="light" style="width: 100px; height: 200px; overflow: hidden;">
                    <img :src="`http://localhost:3001/api/uploads/${productLocal.MaSoHH}` || ''" alt=""
                        class="img-fluid rounded" style="object-fit: cover;">
                </div>

                <div class="card-body">
                    <h4 class="card-title font-weight-bold"><a></a></h4>


                    <p class=""> </p>
                    <p class="h5 font-weight-bold mb-4">{{ productLocal.TenHH || '' }}</p>
                    <p class="">{{ productLocal.MoTaHH || '' }}</p>
                    <p class=" ">{{ parseFloat(productLocal.Gia).toLocaleString('en-US', {
                        minimumFractionDigits: 0, // Số lượng chữ số phần thập phân tối thiểu
                        maximumFractionDigits: 0, // Số lượng chữ số phần thập phân tối đa
                    }) || '' }}VNĐ</p>
                    <ul class="list-unstyled list-inline mb-2">
                        <li class="list-inline-item me-0"><i class="fa fa-star fa-xs" style="color: #e1e160;"> </i></li>
                        <li class="list-inline-item me-0"><i class="fa fa-star fa-xs" style="color: #e1e160;"></i></li>
                        <li class="list-inline-item me-0"><i class="fa fa-star fa-xs" style="color: #e1e160;"></i></li>
                        <li class="list-inline-item me-0"><i class="fa fa-star fa-xs" style="color: #e1e160;"></i></li>
                        <li class="list-inline-item"><i class="fa fa-star-half-alt fa-xs" style="color: #e1e160;"></i></li>

                    </ul>
                    <div>

                        <div class="d-flex justify-content-end m-3">
                            <button @click="addCart" class="btn "><i class="fa-solid fa-cart-shopping"></i></button>
                        </div>
                    </div>


                </div>
            </div>

        </section>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
    data() {
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
    mounted() {
        this.productLocal = { ...this.product };

    },
    methods: {
        addCart() {
            // Save productLocal to local store
            let count = localStorage.getItem('countCart');

            // Convert the count to a number (or initialize it to 0 if it doesn't exist)
            count = count ? parseInt(count, 10) : 0;

            // Increment the count
            count += 1;

            // Update the count in localStorage
            localStorage.setItem('countCart', count);
            localStorage.setItem(`productLocal${localStorage.countCart}`, JSON.stringify(this.productLocal));
        },
    },
};
</script>
  