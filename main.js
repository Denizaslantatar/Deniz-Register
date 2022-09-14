const { createApp } = Vue

  createApp({
    data() {
      return {
        userDetail: {
          name: ' ',
          surname : ' ',
          email: ' ',
          password: null,
          gender: ' '
        }
      }
    },
    methods: {
        showUserDetail() {
            this.showUserDetail = true;
        }
    },
  }).mount('#app')
