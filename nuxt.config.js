import colors from 'vuetify/es5/util/colors'
const strapiBaseUri = process.env.BACKEND_URL || "http://localhost:1337";
const strapiAPIUri = process.env.API_URL || "http://localhost:1337/graphql";
const cloudinaryName = process.env.CLOUDINARY_NAME;
const cloudinaryKey = process.env.CLOUDINARY_KEY;
const cloudinarySecret = process.env.CLOUDINARY_SECRET;
const appName = process.env.APP_NAME;

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  env: {
    strapiAPIUri,
    strapiBaseUri,
    cloudinaryName,
    cloudinaryKey,
    cloudinarySecret,
    appName
  },
  generate: {
    fallback: true
  },
  target: 'static',
  head: {
    titleTemplate: '%s - frontend',
    title: appName,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/tailwind.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify', '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/apollo',
    '@nuxtjs/cloudinary',
    '@nuxtjs/auth-next'
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'auth/local',
            method: 'post',
            propertyName: 'jwt'
          },
          user: {
            url: 'users/me',
            method: 'get',
            propertyName: false
          },
          logout: false
        }
      }
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Apollo
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: strapiAPIUri
      }
    }
  },

  // Cloudinary configuration options
  cloudinary: {
    cloudName: cloudinaryName,
    apiKey: cloudinaryKey,
    apiSecret: cloudinarySecret
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#f5f5f5',
          accent: '#a3a3a3',
          secondary: '#f59e0b',
          info: '#cb3737',
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    analyze: true
  }
}
