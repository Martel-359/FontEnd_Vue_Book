<template>
    <EditUser :user="user" :userId="userId"/>
</template>

<script>
import EditUser from "../components/EditUser.vue";
import UserService from "@/services/user.service.js";
export default {
    name:"editUser",
    components:{
        EditUser,
    },
    data(){
        return{
            user:{},
            userId: this.$route.params.id,
        }
    },
    mounted() {
    // Access the id parameter from the route
    const userId = this.$route.params.id;
    UserService.getById(userId).then((res) => {
        this.user = res;
        console.log(res);
    });
    },

}
</script>