<template src='./template.pug' lang='pug'></template>

<script>
import filtersQuery from '@/apollo/queries/filters'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '@/tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig)
export default {
  components: {},
  data() {
    return {
      filters: [],
      tagColors: {},
      selectedFilters: {}
    }
  },
  apollo: {
    filters: {
      prefetch: true,
      query: filtersQuery,
      update: data => data
    }
  },
  created() {
    this.tagColors = fullConfig.theme.colors.yellow
    this.setSelectedFiltersObj()
  },
  updated() {
    this.$emit('change', this.selectedFilters)
  },
  methods: {
    selected(id, label) {
      if (this.selectedFilters[label].includes(id)) {
        this.selectedFilters[label] = this.selectedFilters[label].filter(el => el !== id)
      } else {
        this.selectedFilters[label].push(id)
      }
    },
    setSelectedFiltersObj() {
      let filtersNames = Object.keys(this.filters)
      this.selectedFilters = filtersNames.reduce((acc, curr) => (acc[curr] = [], acc), {})
    }
  }
}

</script>
