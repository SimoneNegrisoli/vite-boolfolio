<template>
  <AppHeader />
  <router-view></router-view>
  <AppFooter />
</template>

<script>
import axios from 'axios';
import { store } from './data/store.js';
import AppHeader from './components/AppHeader.vue';

import AppFooter from './components/AppFooter.vue';


export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,

  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getApiTest() {
      axios.get(this.store.apiUrl + "projects").then((res) => {
        // console.log(res.data);
      });
    }
  },
  mounted() {
    this.getApiTest();
  },
}
</script>

<style lang="scss" scoped>
@use "./assets/styles/partials/variables"
</style>