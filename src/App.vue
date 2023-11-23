<script>
export default {
  created() {
    if(localStorage.getItem('user') == null){
      localStorage.setItem('user', 0);
    }
    if(localStorage.getItem('countCart') == null){
      localStorage.setItem('countCart', 0);
    }

  },
}
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style></style>