<template>
  <div id="app">
    <Header></Header>
    <HeroVue></HeroVue>
    <WhatSection></WhatSection>
    <GetRequest></GetRequest>
    <PostRequest></PostRequest>
    <!-- <whySection></whySection> -->
    <Footer></Footer>
  </div>
</template>

<script>
import GetRequest from './components/GetRequest.vue';
import Header from './components/Header.vue';
import PostRequest from './components/POST.vue';
import WhatSection from './components/WhatSection.vue';
import Footer from './components/Footer.vue';
// import whySection from './components/whySection.vue';
import HeroVue from './components/Hero.vue';

export default {

  components: { GetRequest, Header, PostRequest, WhatSection, Footer, whySection, HeroVue }
}
</script>

<style lang="scss" scoped>
@import './assets/sass/main.scss';
</style>
