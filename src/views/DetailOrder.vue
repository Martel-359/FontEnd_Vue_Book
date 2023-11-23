<template>
    <DetailOrder :detailOrders="detailOrders"/>
</template>

<script>
import DetailOrderService from '../services/detailOrder.service';
import DetailOrder from '../components/DetailOrder.vue';
export default {
    components: {
        DetailOrder,

    },
    data() {
        return {
            detailOrders:[],
        };
    },
    created() {

        DetailOrderService.getById(this.$route.params.SoDonHang).then((res) => {
            this.detailOrders = res;
            console.log(this.order);
        });


    },
}
</script>