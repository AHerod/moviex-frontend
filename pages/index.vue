<template lang="pug">
  v-row(justify='center' align='center')
    v-card.pa-4.ma-4(v-for='(movie, index) in movies' :key='index')
      div.d-flex.flex-no-wrap.justify-sapce-between
        v-img(:src='movie.cover.url' width="200")
        div.flex.flex-col
          v-card-title.headline.capitalize
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
