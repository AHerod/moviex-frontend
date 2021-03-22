<template lang='pug' src='./template.pug'></template>

<script>
import moviesQuery from '~/apollo/queries/movie/movies'

export default {
  components: {
  },
  props: {
  },
  data() {
    return {
    }
  },
  apollo: {
    movies: {
      prefetch: true,
      query: moviesQuery
    }
  },
  watch: {
  },
  created() {
  },
  computed: {},
  methods: {
  }
}
</script>
