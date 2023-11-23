<template>
    <div v-if="isVisible" class="alert alert-success" role="alert">
      {{ message }}
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isVisible: false,
        message: "",
      };
    },
    methods: {
      showAlert(message) {
        this.message = message;
        this.isVisible = true;
        setTimeout(() => {
          this.isVisible = false;
        }, 5000); // Hide the alert after 5 seconds
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styling for the alert component here */
  .alert {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
  }
  </style>
  