<template lang='pug' src='./template.pug'></template>

<script>
import gql from "graphql-tag";

export default {
  data() {
    return {
      form: {
        identifier: '',
        password: ''
      }
    };
  },
  methods: {
    async login() {
      this.error = null;
      try {
        await this.$auth.loginWith("local", {
          data: {
            identifier: this.form.identifier,
            password: this.form.password,
          },
        });
        console.log(this.$auth)
        this.$router.push("/");
      } catch (e) {
        this.error = e.response.data.message[0].messages[0].message;
      }
    },
  },
}
</script>
