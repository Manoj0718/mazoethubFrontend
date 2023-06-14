<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { Footer, Header },

}
</script>

<style lang="scss" scoped>
@import './assets/sass/main.scss';
</style>
