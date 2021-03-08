<template>
  <v-row justify="center" align="center">
    <v-col class="d-flex">
      <v-card v-for="(movie, index) in movies" :key="index" class="pa-4 ma-4"
              @mouseenter="moviesList[index]=true;" @mouseleave="moviesList[index]=false">
        <div class="relative">
          <v-btn
            v-if="moviesList[index]"
            class="absolute"
            color="primary"
            nuxt
            to="/inspire"
          >
            More
          </v-btn>
          <v-img
            height="250"
            :src="process.env.API_URL + movie.cover.url"
          ></v-img>
        </div>
        <v-card-title class="headline">
          {{ movie.Title }}
        </v-card-title>
        <v-card-text>
          <p>
            {{ movie.brief }}
          </p>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-chip
            class="mx-1"
            color="orange"
            link
            outlined
            pill
            v-for="(tag,index) in movie.tags"
            :key="index"> {{ tag.label }}
          </v-chip>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
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
      moviesList: [],
      query: ''
    }
  },
  apollo: {
    movies: {
      prefetch: true,
      query: moviesQuery
    }
  },
  mounted() {
    this.movies.forEach((el, index) => this.moviesList.push(false));
  }
}
</script>
