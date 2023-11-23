<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="/"><i class="fa-solid fa-book">BooK Shop</i></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/" class="text-decoration-none">
              <button class="nav-link" href="#">Home</button>

            </router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              Catalog
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Category 1</a>
              <a class="dropdown-item" href="#">Category 2</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">All Categories</a>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <div class="d-flex">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </div>
        </form>

      </div>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link :to="{ name: 'cart' }" class="nav-link">
            <a class="nav-link" href="#"><i class="fa-solid fa-cart-shopping ">cart</i></a>
          </router-link>
        </li>
      </ul>
      <ul class="navbar-nav ">
        <li class="nav-item">
          <router-link :to="{ name: 'login' }" class="nav-link" v-if="login==0">
            <a class="nav-link" href="#"><i class="fa-solid fa-user"></i>Login</a>
          </router-link>
          <button v-if="login==1">
            <a class="nav-link" @click="handleLogout" href="#"><i class="fa-solid fa-right-from-bracket"></i>Logout</a>
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>
  
<script>
// You can add your script setup logic here'
import authenService from '../services/authen.service';
export default {
  data() {
    return {
      login: localStorage.getItem('user'),
    }
  },
  // watch: {
  //   // Watch changes to localStorage.user
  //   '$data.login'(newLogin) {
  //     // Update localStorage.user when login changes
  //     localStorage.user = newLogin;
  //   },
  // },
  methods: {
    handleLogout() {
      this.login=0;
      authenService.logout();
 
    },
  },
}
</script>

<style scoped>
/* You can add your scoped styles here */
.d-flex {
  display: flex;
}
</style>
  