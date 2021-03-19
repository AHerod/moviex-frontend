<template lang="pug">
  div
    hero-card
    cards-row
</template>

<script>
import Logo from '@/components/Logo.vue'
import VuetifyLogo from '@/components/VuetifyLogo.vue'
import HeroCard from '@/components/HeroCard'
import CardsRow from '@/components/CardsRow'

export default {
  components: {
    Logo,
    VuetifyLogo,
    HeroCard,
    CardsRow
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
