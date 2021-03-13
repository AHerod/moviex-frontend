<template lang='pug' src='./template.pug'></template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import moviesQuery from '~/apollo/queries/movie/movies'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  props: {
    filters: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      movies: [],
      filteredMovies: [],
      query: '',
      hover: false
    }
  },
  apollo: {
    movies: {
      prefetch: true,
      query: moviesQuery
    }
  },
  watch: {
    filters: {
      handler(newValue, oldValue) {
        Object.keys(newValue).forEach(filterName => {
          // console.log(filterName, newValue[filterName]);
          let filteredMovies = this.movies

          filteredMovies.filter(movie => movie[filterName].some(r=> newValue[filterName].includes(r)))
          console.log('filteredMovies',filteredMovies)
          this.filteredMovies = filteredMovies
        })
      },
      deep: true,
      immediate: true
    }
  },
  created() {

  },
  computed: {
    moviesList() {
      let arr = []
      this.movies.forEach((el, index) => arr.push(false))
      return arr
    }
  },
  methods: {}
}
</script>
