import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/views/HomePage.vue";
const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
    {
        path: "/admin",
        name: "admin",
        component: () => import("@/views/Admin.vue"),
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/Login.vue"),
    },
    {
        path:"/edit/:id",
        name:"editUser",
        component: () => import("@/views/EditUser.vue"),
    },
    {
        path:"/admin/product/:id?",
        name:"product",
        props: true,
        component: () => import("@/views/Product.vue"),
    },
    {
        path:"/admin/emloyee/:id?",
        name:"employee",
        props: true,
        component: () => import("@/views/Employee.vue"),
    },
    {
        path:"/admin/detailOrder/:SoDonHang",
        name:"detailOrder",
        component: () => import("@/views/DetailOrder.vue"),
    },
    {
        path:"/cart",
        name:"cart",
        component: () => import("@/views/Cart.vue"),
    }
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;