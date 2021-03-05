<template>
  <v-row>
    <v-col class='text-center'>
      <blockquote class='blockquote'>
        <footer>
          <v-chip
            @click='selected(tag.id)'
            class='mx-1'
            color='orange'
            link
            :outlined="!selectedTags.includes(tag.id)"
            pill
            v-for='(tag,index) in tags'
            :key='index'> {{ tag.label }}
          </v-chip>
          <v-btn icon color='orange' light>
            <v-icon light>mdi-magnify</v-icon>
          </v-btn>
        </footer>
      </blockquote>
    </v-col>
  </v-row>
</template>

<script>
import tagQuery from '~/apollo/queries/tag/tags'

export default {
  components: {},
  data() {
    return {
      tags: [],
      selectedTags: []
    }
  },
  apollo: {
    tags: {
      prefetch: true,
      query: tagQuery
    }
  },
  methods: {
    selected(tag_id) {
      if (this.selectedTags.includes(tag_id)) {
        this.selectedTags = this.selectedTags.filter(el => el !== tag_id)
      } else {
        this.selectedTags.push(tag_id)
      }
    }
  }
}
</script>
