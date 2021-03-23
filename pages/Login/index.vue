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
      const credentials = this.form;
      try {
        const { data: { login: { user, jwt } } } = await this.$apollo.mutate({
          mutation: gql`
            mutation($identifier: String!, $password: String!) {
              login(input: { identifier: $identifier, password: $password }) {
                user {
                  id
                  username
                  email
                  role {
                    name
                    type
                    description
                  }
                }
                jwt
              }
            }
          `,
          variables: credentials
        })
        //set the jwt to the this.$apolloHelpers.onLogin
        await this.$apolloHelpers.onLogin(jwt)
      } catch (e) {
        console.error(e)
      }
    }
  },
  async mounted(){
    await this.$apolloHelpers.onLogout()
  }
}
</script>
