<template lang="pug">
  div
    hero-card
</template>

<script>
import Logo from '@/components/Logo.vue'
import VuetifyLogo from '@/components/VuetifyLogo.vue'
import HeroCard from '@/components/HeroCard'

export default {
  components: {
    Logo,
    VuetifyLogo,
    HeroCard
  },
  data() {
    return {
    }
  },
  apollo: {
  },
  computed: {
  },
  methods: {}
}
</script>
