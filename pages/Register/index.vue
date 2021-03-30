<template lang='pug' src='./template.pug'></template>

<script>
import Notification from '@/components/Notification';

export default {
  components: {
    Notification
  },
  data() {
    return {
      form: {
        username: '',
        email: '',
        password: ''
      },
      success: null,
      error: null
    };
  },
  methods: {
    async register() {
      this.error = null;
      try {
        this.$axios.setToken(false);
        await this.$axios.post("auth/local/register", {
          username: this.form.username,
          email: this.form.email,
          password: this.form.password,
        });
        this.success = `A confirmation link has been sent to your email account. \
        Please click on the link to complete the registration process.`;
      } catch (e) {
        this.error = e.response.data.message[0].messages[0].message;
      }
    }
  }
}
</script>
