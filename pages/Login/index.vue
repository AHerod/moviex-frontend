<template lang='pug' src='./template.pug'></template>

<script>
import Notification from '@/components/Notification';

export default {
  data() {
    return {
      form: {
        identifier: '',
        password: ''
      },
      success: null,
      error: null
    };
  },
  methods: {
    loginUser() {
      this.$auth.loginWith('local', {
        data: {
          identifier: this.form.identifier,
          password: this.form.password,
        },
      }).then(response => {
        this.$auth.setUser({user: response.data.user})
      });
    },
    async login() {
      this.error = null;
      try {
        let response = await this.$auth.loginWith('local', {
          data: {
            identifier: this.form.identifier,
            password: this.form.password,
          },
        });
        this.success = 'logged in!'
        this.$router.push("/");
      } catch (e) {
        this.error = e.response.data.message[0].messages[0].message;
      }
    },
  },
}
</script>
