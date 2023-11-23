<template>
    <HeaderApp />
    <FormLogin v-if="!isRegister" :user="user"  @isRegister="handleIsRegister" />
    <Register v-else @isRegister="handleIsRegister"/>
</template>

<script>
import HeaderApp from "@/components/Header.vue";
import FormLogin from "../components/FormLogin.vue";
import Register from "../components/Register.vue";
export default {
    name: "Login",
    components: {
        HeaderApp,
        FormLogin,
        Register,
    },
    data() {
        return {
            isRegister: false,
            user:{},
        };
    },
    methods: {
        handleIsRegister() {
            this.isRegister = !this.isRegister;
        },
    },
}
</script>