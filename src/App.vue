<template>
  <v-app id="app">
    <h1>{{title}}</h1>
    <v-btn>123</v-btn>
    <router-view></router-view>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',

  metaInfo: {
    meta: [
      { charset: 'utf-8' },
    ]
  },

  computed: {
    ...mapGetters({
      title: 'title',
    })
  },
};
</script>
