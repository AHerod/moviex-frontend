<template>
  <v-app>
    <v-navigation-drawer
      v-model='drawer'
      app
    >
      <v-img src=''></v-img>
      <v-list class='flex flex-col min-h-full p-0'>
        <v-list-item class='flex items-center justify-center' to='/'>
          <h1 class='font-bold text-3xl'>MOVIEX</h1>
        </v-list-item>
        <v-list-item
          v-for='(item, i) in items'
          :key='i'
          :to='item.to'
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text='item.title' />
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for='(item, i) in authItems'
          :key='i + `-auth`'
          :to='item.to'
          router
          exact
          v-if='isAuthenticated'
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text='item.title' />
          </v-list-item-content>
        </v-list-item>
        <div v-if='isAuthenticated'>
          <v-list-item to='/profile'>
            <v-list-item-content>
              <span class='text-black'>{{ loggedInUser.username }}</span>
            </v-list-item-content>
            <v-list-item-action>
              <v-avatar>
                <img
                  src='https://cdn.vuetifyjs.com/images/john.jpg'
                  alt='John'
                >
              </v-avatar>
            </v-list-item-action>
          </v-list-item>
          <v-list-item @click='logout'>
            <v-list-item-action>
              <v-icon>mdi-keyboard-return</v-icon>
            </v-list-item-action>
            <v-list-item-content><span class='text-black'>Logout</span></v-list-item-content>
          </v-list-item>
        </div>
        <v-list-item v-else class='flex justify-center w-full'>
          <nuxt-link class='text-gray-700 font-bold px-2' to='/register'>
            Register
          </nuxt-link>
          <nuxt-link class='text-yellow-500 font-bold px-2' to='/login'>
            Sign In
          </nuxt-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left='true'
      fixed
      flat
      app
    >
      <v-app-bar-nav-icon @click.stop='drawer = !drawer' />
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute='true'
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-view-module',
          title: 'Catalog',
          to: '/catalog'
        }
      ],
      authItems: [
        {
          icon: 'mdi-bookmark',
          title: 'Your Watchlist',
          to: '/'
        }
      ],
      miniVariant: false,
      right: true,
      title: 'Moviex'
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  mounted() {
  },
  methods: {
    async logout() {
      await this.$auth.logout()
    }
  }
}
</script>
