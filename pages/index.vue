<template lang="pug">
  div(class="grid grid-flow-row lg:grid-cols-2 gap-4 md:container md:mx-auto")
    v-card(
      v-for='(movie, index) in movies'
      :key='index'
      elevation="10"
    )
      div(class="d-flex flex-no-wrap justify-space-between flex-col sm:flex-row")
        img(
          class="sm:max-h-80 sm:block"
          :src='movie.cover.url'
        )
        div(class="flex flex-col")
          v-card-title(class="headline capitalize")
            | {{ movie.Title }}
          v-card-text
            | {{ movie.brief }}
          v-card-actions
            v-spacer
              v-chip(class="mx-1" color='orange' link='' outlined='' pill='' v-for='(tag,index) in movie.tags' :key='index')
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
      this.movies.filter((el, index) => arr.push(false));
      return arr
    }
  },
  methods: {}
}
</script>
