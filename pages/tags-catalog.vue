<template lang="pug">
  v-row
    v-col.text-center
      blockquote.blockquote
        footer
          v-chip.mx-1(
            v-for='(tag,index) in tags'
            :key='index'
            @click='selected(tag.id)'
            pill
            link
            color='orange'
            :outlined='!selectedTags.includes(tag.id)'
          )
            | {{ tag.label }}
          v-btn(icon color='orange' light)
            v-icon(light) mdi-magnify

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
