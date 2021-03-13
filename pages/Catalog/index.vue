<template src='./template.pug' lang='pug'></template>
<script>
import Filters from '~/components/Filters'
import Movies from '~/components/Movies'

export default {
  components: {
    Filters,
    Movies
  },
  data() {
    return {
      filters: {}
    }
  },
  apollo: {
  },
  methods: {
    getFilters(filters){
      this.filters = filters;
    }
  }
}
</script>
