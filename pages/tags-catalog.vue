<template lang='pug'>
  v-row
    v-col.text-center
      div.py-2.flex.items-center.justify-between
        h2.text-left tags
        div
          v-chip.mx-1(
            v-for='(tag,index) in tags'
            :key='index'
            @click='selected(`tag_`+tag.id)'
            pill
            link
            color='orange'
            :outlined='!selectedChips.includes(`tag_`+tag.id)'
          )
            | {{ tag.label }}
        v-btn(icon color='orange' light)
          v-icon(light) mdi-magnify
      v-divider
      div.py-2.flex.items-center.justify-between
        h2.text-left genres
        div
          v-chip.mx-1(
            v-for='(genre,index) in genres'
            :key='index'
            @click='selected(`genre_`+genre.id)'
            pill
            link
            color='purple'
            :outlined='!selectedChips.includes(`genre_`+genre.id)'
          )
            | {{ genre.genre }}
        v-btn(icon color='purple' light)
          v-icon(light) mdi-magnify


</template>

<script>
import tagQuery from '~/apollo/queries/tag/tags'
import genreQuery from '~/apollo/queries/genre/genres'
import filtersQuery from '~/apollo/queries/filters'

export default {
  components: {},
  data() {
    return {
      tags: [],
      genres: [],
      selectedChips: [],
      selectedGenres: [],
      filters: []
    }
  },
  apollo: {
    tags: {
      prefetch: true,
      query: tagQuery
    },
    genres: {
      prefetch: true,
      query: genreQuery
    },
    filters: {
      prefetch: true,
      query: filtersQuery
    }
  },
  methods: {
    selected(id) {
      if (this.selectedChips.includes(id)) {
        this.selectedChips = this.selectedChips.filter(el => el !== id)
      } else {
        this.selectedChips.push(id)
      }
    }
  }
}
</script>
