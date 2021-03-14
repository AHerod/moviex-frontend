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
      selectedFilters: [],
      moviesList: [],
      noResultsAlert: false,
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
      handler(newValue) {
        this.selectedFilters = newValue
        this.getMoviesList()
      },
      deep: true,
      immediate: true
    }
  },
  created() {
  },
  computed: {},
  methods: {
    getMoviesList() {
      let filteredMovies = this.movies
      let filterTypes = Object.keys(this.selectedFilters)

      filterTypes.forEach(type => {
          if (this.selectedFilters[type]) {
            filteredMovies = filteredMovies.filter(movie => {
              let filtersIDList = movie[type].map(a => a.id)

              return this.selectedFilters[type].every(tag => filtersIDList.includes(tag))
            })

            if(filteredMovies.length === 0) {
              this.moviesList = []
              this.noResultsAlert = true
            }
          }
        }
      )

      this.moviesList = filteredMovies
    }
  }
}
</script>
