<template lang='pug' src='./template.pug'></template>

<script>
import genresQuery from '~/apollo/queries/genre/genres'
import moviesQuery from '~/apollo/queries/movie/movies'

export default {
  components: {
  },
  props: {
  },
  data() {
    return {
      selectedGenres: [],
      movies: [],
      reveal: false
    }
  },
  apollo: {
    genres: {
      prefetch: true,
      query: genresQuery
    },
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
    selected(id) {
      if (this.selectedGenres.includes(id)) {
        this.selectedGenres = this.selectedGenres.filter(el => el !== id)
      } else {
        this.selectedGenres.push(id)
      }
    }
  }
}
</script>
