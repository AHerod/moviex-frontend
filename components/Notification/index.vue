<template>
  <v-alert dense text :type='type' class='notification'>
    {{ message }}
  </v-alert>
</template>

<script>

export default {
  name: 'Notification',
  props: {
    type: {
      type: String,
      default: 'success',
      validator: (val) => ['error', 'success'].includes(val),
    },
    message: {
      type: String,
      default: '',
    },
  },
};
</script>
