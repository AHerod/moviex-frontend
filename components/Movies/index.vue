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
      filtersSelected: false,
      query: '',
      reveal: false,
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

        if(Object.keys(newValue).length !== 0) {
          let allEmpty = Object.keys(newValue).every(function(key){
            return newValue[key].length === 0
          })

          if(!allEmpty) {
            this.filtersSelected = true
            this.getMoviesList()
          } else {
            this.filtersSelected = false
          }
        }

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
            }
          }
        }
      )

      this.moviesList = filteredMovies
    }
  }
}
</script>
