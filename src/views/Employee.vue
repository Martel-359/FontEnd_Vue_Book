<template>
    <Add_Update_Employee :id="id" :employee="this.employee"/>
</template>

<script>
import Add_Update_Employee from '../components/Add_Update_Employee.vue';
import EmployeeService from "@/services/employee.service.js"
export default {
    components: {
        Add_Update_Employee
    },
    data() {
        return {
            employee: {
                MSNV: "",
                HoTenNV: "",
                Password: "",
                ChucVu: "",
                DiaChi: "",
                SoDienThoai: "",
            },
            id:"",
        };
    },
    created() {
        this.id = this.$route.params.id;
        console.log(this.id);
        if (this.id) {
            EmployeeService.getById(this.id).then((res) => {
                this.employee = res;
                console.log(this.employee);
            });
        }
    },
}
</script>
