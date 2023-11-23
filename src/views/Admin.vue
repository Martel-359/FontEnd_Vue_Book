<template>
  <div>
    <header>Trang Quản Lý </header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 ">
          <NavAdmin :index="index" @NavAdmin="changeIndex"/>
        </div>
        <div class="col-md-9">
          <Employee @submitDelete="retrieveEmployee" :Employees="Employees" v-if="this.index===1"/>
          <User @submitDelete="retrieveUser" :Users="Users" v-if="this.index===0"/>
          <Product @submitDelete="retrieveProduct" :Products="Products" v-if="this.index===2 "/>
          <Order @submitDelete="retrieveOrder" :Orders="Orders" v-if="this.index===3"/>
          <UploadImage v-if="this.index===4"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from "@/components/user.vue";
import UserService from "@/services/user.service.js";
import NavAdmin from "@/components/NavAdmin.vue";
import ProductService from "../services/product.service";
import Product from "../components/Product.vue";
import Employee from "../components/Employee.vue";
import EmployeeService from "../services/employee.service";
import Order from "../components/Order.vue";
import OrderService from "../services/order.service";
import UploadImage from "../components/UploadImage.vue";
import test from "../components/test.vue";
export default {
  name: "Admin",
  components: {
    User,
    NavAdmin,
    Product,
    Employee,
    Order,
    UploadImage,
  },
  data() {
    return {
      Users: [],
      Products: [],
      Employees: [],
      Orders: [],
      index: 0,
    };
  },
  created() {
    // Call retrieveUser when the component is created (connected)
    this.retrieveUser();
    this.retrieveProduct();
    this.retrieveEmployee();
    this.retrieveOrder();
  },
  methods: {
    async retrieveUser() {
      try {
        this.Users = await UserService.getAll();
      } catch (error) {
        console.log(error);
      }
    },

    async retrieveProduct() {
      try {
        this.Products = await ProductService.getAll();
      } catch (error) {
        console.log(error);
      }
    },

    async retrieveEmployee() {
      try {
        this.Employees = await EmployeeService.getAll();
      } catch (error) {
        console.log(error);
      }
    },

    async retrieveOrder() {
      try {
        this.Orders = await OrderService.getAll();
      } catch (error) {
        console.log(error);
      }
    },

    changeIndex(index) {
      this.index = index;
    },
  }
};
</script>

<style>
/* Your style code here */
</style>
