<template lang="pug">
  v-row(justify='center' align='center')
    .grid.grid-flow-col.grid-cols-3.grid-rows-3.gap-4
      v-col.d-flex
        v-card.pa-4.ma-4(v-for='(movie, index) in movies' :key='index')
          v-img(height='250' :src='movie.cover.url')
          v-card-title.headline
            | {{ movie.Title }}
          v-card-text
            p
              | {{ movie.brief }}
          v-card-actions
            v-spacer
              v-chip.mx-1(color='orange' link='' outlined='' pill='' v-for='(tag,index) in movie.tags' :key='index')
                | {{ tag.label }}
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import moviesQuery from '~/apollo/queries/movie/movies'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data() {
    return {
      // Initialize an empty restaurants variabkle
      movies: [],
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
  computed: {
    moviesList() {
      let arr = []
      this.movies.forEach((el, index) => arr.push(false));
      return arr
    }
  },
  methods: {}
}
</script>
