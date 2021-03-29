<template lang='pug' src='./template.pug'></template>

<script>
import gql from 'graphql-tag'
export default {
  middleware: ['authenticated'],
  data(){
    return {
      me: {}
    }
  },
  apollo: {
    me: {
      query: gql`
        query {
          me{
            id
            email
            username
            role{
              name
            }
          }
        }
      `
    }
  }
}
</script>
