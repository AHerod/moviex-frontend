<template>
  <v-app>
    <v-navigation-drawer
      v-model='drawer'
      app
    >
      <v-img src=''></v-img>
      <v-list>
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
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left='true'
      fixed
      flat
      app
    >
      <v-app-bar-nav-icon @click.stop='drawer = !drawer' />
      <div v-if='isAuthenticated' class='flex w-full justify-end items-center'>
        <a href="/profile">
          <v-avatar>
            <img
              src='https://cdn.vuetifyjs.com/images/john.jpg'
              alt='John'
            >
          </v-avatar>
          <span class='text-black'>{{ loggedInUser.username }}</span>
        </a>
        <button @click='logout'>Logout</button>
      </div>
      <div>
        <nuxt-link class="text-gray-700" to="/register">
          <strong>Register</strong>
        </nuxt-link>
        <nuxt-link class="bg-yellow-500" to="/login">
          Log in
        </nuxt-link>
      </div>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute='false'
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Catalog',
          to: '/catalog'
        }
      ],
      miniVariant: false,
      right: true,
      title: 'Moviex'
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
  },
  mounted() {
  },
  methods: {
    logout() {
      console.log('LOGOUT')
    }
  }
}
</script>
